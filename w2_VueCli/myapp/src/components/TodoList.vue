<template>
  <div>
    <TodoForm v-on:additem="addItem" />
    <TodoContent :datalist="datalist" />
  </div>
</template>
<script>
import TodoForm from "./TodoForm.vue";
import TodoContent from "./TodoContent.vue";
import "bootstrap/dist/css/bootstrap.css";

import Bus from '../Bus';


export default {
  data() {
    return {
      datalist: [
        {
          id: Date.now(),
          title: "年前实现<strong>月薪过万</strong>",
          done: false,
          selected: false
        },
        {
          id: Date.now() + 10,
          title: "明年变成高富帅，迎娶白富美",
          done: false,
          selected: false
        }
      ]
    };
  },
  components: {
    TodoForm,
    TodoContent
  },
  methods: {
    addItem(title) {
      let data = {
        id: Date.now(),
        title: title,
        done: false,
        selected: false
      };
      this.datalist.unshift(data);
    },
    removeItem(idx) {
      this.datalist.splice(idx, 1);
    },
    completeItem(id) {
      this.datalist.forEach(item => {
        if (item.id === id) {
          item.done = true;
        }
      });
    },
    selectItem(idx) {
      this.datalist[idx].selected = !this.datalist[idx].selected;
    }
  },

  created(){
      Bus.$on('completeitem',this.completeItem)
      Bus.$on('removeitem',this.removeItem)
      Bus.$on('selectitem',this.selectItem)
  }
};
</script>
<style>
</style>
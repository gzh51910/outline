<template>
  <div class="input-group">
    <input type="text" class="form-control" v-model="title" ref="title" @keyup.13="addItem" />
    <div class="input-group-btn">
      <!-- <button type="button" class="btn btn-success" v-on:click="addItem">添加</button> -->
      <TodoButton class="btn-success" idx="10" v-on:click.native="addItem">添加</TodoButton>
    </div>
  </div>
</template>
<script>
import TodoButton from "./TodoButton.vue";
export default {
  data() {
    return {
      title: ""
    };
  },
  components: {
    TodoButton
  },
  methods: {
    addItem() {
      this.$emit("additem", this.title);

      // 清空并获得焦点
      this.title = "";
      this.$refs.title.focus();
    }
  }
};
</script>
<style>
</style>
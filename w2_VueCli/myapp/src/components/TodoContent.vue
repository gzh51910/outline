<template>
    <div>
       <table class="table table-striped">
            <thead>
                <tr>
                    <th><input type="checkbox" v-model="selectAll"/>全选</th>
                    <th>#</th>
                    <th>待办事项</th>
                    <th>是否完成</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <TodoItem 
                v-for="(item,idx) in datalist" 
                :key="item.id"
                :item="item" 
                :idx="idx"
                @click.native="selectItem(idx)"
                ></TodoItem>
            </tbody>
        </table>
    </div>
</template>
<script>
import TodoItem from './TodoItem.vue';
import Bus from '../Bus'
export default {
    props:['datalist'],
    computed:{
        // 这里的属性为存储器属性
        selectAll:{
            get(){
                return this.datalist.every(item=>item.selected)
            },
            set(val){
                this.datalist.forEach(item=>{
                    item.selected = val
                })


            }
        }
    },
    components:{
        TodoItem
    },
    methods:{
        selectItem(idx){
            Bus.$emit('selectitem',idx)
        }
    }
}
</script>
<style>

</style>
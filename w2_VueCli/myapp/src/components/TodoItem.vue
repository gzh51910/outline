<template>
    <tr 
    v-bind:key="item.id" 
    :class="{success:item.selected}"
    >
        <td><input type="checkbox" v-model="item.selected"></td>
        <td>{{idx+1}}</td>
        <td v-html="item.title"></td>
        <td>{{item.done?'是':'否'}}</td>
        <td>
            <div class="btn-group btn-group-sm">
                <!-- <button class="btn btn-default" @click.stop="completeItem(item.id)">完成</button>
                <button class="btn btn-danger" @click.stop="removeItem(idx)">删除</button> -->
                <TodoButton class="btn-default" @click.stop.native="completeItem(item.id)">完成</TodoButton>
                <TodoButton class="btn-danger" @click.stop.native="removeItem(idx)">删除</TodoButton>
            </div>
        </td>
    </tr>
</template>
<script>
import TodoButton from './TodoButton.vue';
import Bus from '../Bus'
export default {
    props:['item','idx'],
     components:{
        TodoButton
    },
    methods:{
        completeItem(id){
            Bus.$emit('completeitem',id)
        },
        removeItem(idx){
            Bus.$emit('removeitem',idx)
        }
    }
}
</script>
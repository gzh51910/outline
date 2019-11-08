<template>
    <div>
        <ul>
            <li v-for="item in 5" :key="item" @click="goto(item)">商品{{item}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    methods:{
        goto(id){
            // this.$router.push({name:'goods',params:{id}})
            // this.$router.push({path:'/goods',params:{id}})
            this.$router.push({name:'goods',query:{id},params:{id,username:'laoxie'}})
        }
    }
}
</script>
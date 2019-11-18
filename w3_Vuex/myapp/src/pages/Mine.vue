<template>
    <div>
        <!-- <form 
            enctype="multipart/form-data" 
            action="http://localhost:1910/upload/avatar"
            method="post"
        >
            <input type="hidden" name="userid" :value="userid"/> -->
            <input type="file" name="avatar" ref="avatar"/>
            <button type="submit" @click="upload">上传</button>
        <!-- </form> -->
        <br/>
        <br/>
        <input type="file" name="goods" ref="goods" multiple/>
        <button @click="uploadGoods">上传</button>
    </div>
</template>
<script>
import {my} from '../Api'
export default {
    data(){
        return {
            userid:'',
            avatar:''
        }
    },
    computed:{
        // ...mapState([])
    },
    created(){
        this.userid = this.$store.state.common.user._id
    },
    methods:{
        upload(){
            // HTML5新特性：FormData
            // * set()/get()
            // * append()
            let myData = new FormData();

            // 必须传递文件而不是文件地址
            myData.set('avatar',this.$refs.avatar.files[0]);
            myData.set('userid',this.userid);
            my.post('/upload/avatar',myData);
        },
        uploadGoods(){
            let {goods} = this.$refs;
            let myData = new FormData();
            for(let i=0;i<goods.files.length;i++){
                myData.append('goods',goods.files[i]);
            }

            my.post('/upload/goods',myData);
        }
    }
}
</script>
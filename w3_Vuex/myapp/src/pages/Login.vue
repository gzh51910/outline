<template>
  <div>
    <h1>登录</h1>
    <el-form
      label-position="right"
      label-width="100px"
      ref="loginForm"
      :rules="rules"
      :model="loginForm"
    >
      <el-form-item label="用户名" prop="username" :error="errorMsg">
        <el-input v-model="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password" :error="errorMsg">
        <el-input type="password" v-model="loginForm.password"></el-input>
      </el-form-item>
      <el-form-item prop="mdl">
        <el-checkbox v-model="loginForm.mdl">下次免登陆</el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="submitForm('numberValidateForm')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
        errorMsg:'',
      loginForm: {
        username: "",
        password: "",
        mdl:true
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 3,
            max: 12,
            message: "长度在 3 到 12 个字符",
            trigger: "blur"
          }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 20, message: "长度在 6 到 20 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods:{
      submitForm(){
          this.$refs.loginForm.validate(async (valid) => {
            if (valid) {
                // 校验成功发起ajax请求
                console.log('success');

                let {username,password} = this.loginForm;
                let result = await this.$axios.get('http://localhost:1910/login',{
                    params:{
                        username,
                        password
                    }
                });
                console.log('result:',result);
                let {data,headers} = result;
                if(data.status === 0){
                    // console.log('不行')
                    this.errorMsg = '用户名或密码错误'
                }else{
                    

                    let user = data.data[0];
                    // 从响应头中获取Authorization
                    user.Authorization = headers.authorization
                    this.$store.commit('login',user)
                    let redirectUrl = this.$route.query.redirectUrl || '/mine';console.log('redirectUrl:',redirectUrl)
                    this.$router.push(redirectUrl)
                }
            } else {
                console.log('error submit!!');
                return false;
            }
        });
      }
  }
};
</script>
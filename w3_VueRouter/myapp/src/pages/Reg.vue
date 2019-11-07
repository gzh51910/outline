<template>
  <div>
    <h1>免费注册</h1>
    <el-form label-position="right" label-width="100px" ref="regForm" :rules="rules" :model="regForm">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="regForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="regForm.password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="confirmPassword">
        <el-input type="password" v-model="regForm.confirmPassword"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="submitForm('numberValidateForm')">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    var checkUsername = (rule, value, callback) => {
        if (!/^[a-z]/i.test(value)) {
        callback(new Error("用户名必须以字母开头"));
      }else if (!/^[\w-]+$/i.test(value)) {
        callback(new Error("用户名必须为数字、字母、_、-"));
      } else {
        callback();
      }
    };

    var checkPassword = (rule, value, callback) => {
      if (value !== this.regForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      regForm: {
        username: "",
        password: "",
        confirmPassword: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 3,
            max: 12,
            message: "长度在 3 到 12 个字符",
            trigger: "blur"
          },
          { validator: checkUsername, trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 20, message: "长度在 6 到 20 个字符", trigger: "blur" }
        ],
        confirmPassword: [{ validator: checkPassword, trigger: "blur" }]
      }
    };
  },
  methods:{
      submitForm(){
          this.$refs.regForm.validate(async (valid) => {
            if (valid) {
                // 校验成功发起ajax请求
                console.log('success');

                let {username,password} = this.regForm;
                let {data} = await this.$axios.post('http://localhost:1910/reg',{
                    username,
                    password
                });
                console.log(data)
                if(data.status === 1){
                    this.$router.replace('/login')
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
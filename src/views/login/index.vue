<template>
  <div id="login-container">
    <el-form
      ref="form"
      :rules="rules"
      :model="form"
      label-width="70px"
      class="login-form"
    >
      <h2 class="login-title">原木图书信息管理系统</h2>
      <el-form-item prop="username" label="用户名">
        <el-input
          v-model="form.username"
          type="text"
          placeholder="请输入用户名"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password" label="密码">
        <el-input
          v-model="form.password"
          type="password"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(form)">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { login, getUserInfo } from "@/api/login";
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur",
          },
          {
            min: 6,
            max: 32,
            message: "长度在6-32个字符",
            trigger: ["blur", "change"],
          },
        ],
      },
    };
  },
  methods: {
    submitForm(form) {
      this.$refs.form.validate((valid) => {
        if (valid) {//表示校验成功
          login(this.form.username,this.form.password)
          .then(response=>{
              console.log(response.data)
              const resp=response.data
              if(resp.flag)//认证通过
              {
                  getUserInfo(resp.data.token)
                  .then(response=>{
                      console.log(response.data)
                      const respUser=response.data
                      if(respUser.flag)
                      {
                          localStorage.setItem("ym-manager-user",JSON.stringify(respUser.data))
                          localStorage.setItem("ym-manager-token",resp.data.token)
                          this.$router.push('/home')
                      }
                      else{
                          this.$message({
                                message: respUser.message,
                                type: 'warning'
                                });
                      }
                  })
              }
              else{
                 this.$message({
                    message: resp.message,
                    type: 'warning'
                    });
                }

          })
            
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
  }
};
</script>

<style scoped>
.login-form {
  width: 350px;
  height: 250px;
  background-color: #fff;
  padding: 15px;
  border-radius: 20px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -175px;
  margin-top: -125px;
}
#login-container {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url("@/assets/login-bg.jpg");
}
.login-title {
  color: #606266;
  text-align: center;
}
</style>

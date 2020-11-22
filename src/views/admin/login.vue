<template>
  <div class="page">
    <!-- 登录 -->
    <el-form
      class="form"
      ref="loginForm"
      :model="loginFormData"
      :rules="loginFormRule"
      label-width="100px"
    >
      <el-form-item label="用 户 名" prop="username">
        <el-input v-model="loginFormData.username"></el-input>
      </el-form-item>
      <el-form-item label="密 码" prop="password">
        <el-input v-model="loginFormData.password" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" :loading="logging" @click="login('loginForm')"
          >登录</el-button
        >
      </el-form-item>
      <el-form-item>
        <el-button plain @click="registerDialog = true">注册</el-button>
      </el-form-item>
    </el-form>

    <!-- 注册 -->
    <el-dialog title="注册用户" :visible.sync="registerDialog">
      <el-form
        ref="registerForm"
        :model="registerFormData"
        :rules="registerFormRule"
        label-width="100px"
      >
        <el-form-item label="用 户 名" prop="username">
          <el-input v-model="registerFormData.username"></el-input>
        </el-form-item>
        <el-form-item label="密 码" prop="password">
          <el-input
            v-model="registerFormData.password"
            type="password"
          ></el-input>
        </el-form-item>
        <el-form-item label="手 机 号" prop="phone">
          <el-input v-model="registerFormData.phone"></el-input>
        </el-form-item>
        <el-form-item label="昵 称" prop="nickname">
          <el-input v-model="registerFormData.nickname"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button
          type="primary"
          :loading="registering"
          @click="register('registerForm')"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { setToken } from '@/utils/storage'
import { register, login } from '@/assets/api/admin'
export default {
  data() {
    return {
      loginFormData: {
        username: '',
        password: ''
      },
      loginFormRule: {
        username: [{ required: true, message: '请填写用户名', trigger: 'change' }],
        password: [{ required: true, message: '请填写密码', trigger: 'change' }],
      },
      registerFormData: {
        username: '',
        password: '',
        phone: '',
        nickname: ''
      },
      registerFormRule: {
        username: [{ required: true, message: '请填写用户名', trigger: 'change' }],
        password: [{ required: true, message: '请填写密码', trigger: 'change' }],
        phone: [{ required: true, message: '请填写手机号', trigger: 'change' }],
        nickname: [{ required: true, message: '请填写用户昵称', trigger: 'change' }],
      },
      logging: false, //登录中
      registering: false, //注册中
      registerDialog: false //注册面板
    }
  },
  methods: {
    //登录
    login(formName) {
      this.logging = true
      this.$refs[formName].validate(valid => {
        if (valid) {
          const params = {
            username: this.loginFormData.username,
            password: this.loginFormData.password
          }
          login(params).then(res => {
            setToken(res.data.token)
          })
            .catch()
            .finally(() => {
              this.logging = false
            })
        }
      })
    },
    //注册
    register(formName) {
      this.registering = true
      this.$refs[formName].validate(valid => {
        if (valid) {
          const params = {
            username: this.registerFormData.username,
            password: this.registerFormData.password,
            phone: this.registerFormData.phone,
            nickname: this.registerFormData.nickname,
          }
          register(params)
            .then()
            .catch()
            .finally(() => {
              this.registering = false
            })
        }
      })
    },
  }
}
</script>

<style lang='scss' scoped>
.page {
  width: 100vw;
  height: 100vh;
  background-image: url("../../assets/images/bg.jpg");
  background-size: cover;
}
.form {
  width: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
}
</style>
<style>
.el-form-item__label {
  color: black !important;
}
.el-button {
  width: 100%;
}
</style>
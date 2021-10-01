<template>
  <div id="login">
    <img src="../assets/logo.png" class="img-inicial">
    <el-form label-width="100px" class="form-login" :model="formLogin">
      <el-input placeholder="Correo electrónico" required v-model="formLogin.email"></el-input>
      <el-input type="password" placeholder="Contraseña" required v-model="formLogin.password" autocomplete="off"></el-input>
      <el-button type="primary" class="ingresar-login" @click="loginForm">Ingresar</el-button>
    </el-form>
  </div>
</template>

<script>
import Firebase from 'firebase';

export default {
  data:() => ({
    formLogin: {
      email: "",
      password: "",
    }
  }),
  methods: {
    loginForm() {
      Firebase.auth()
        .signInWithEmailAndPassword(this.formLogin.email, this.formLogin.password)
        .then((response) => {
          console.log(response.user.email)
          this.$store.dispatch('defineCurrentUser', {email: response.user.email})
          this.$router.push('/')
        })
        .catch((error) => {
          console.log(error)
        })
    },
  }
}
</script>

<style lang="scss" scoped>
#login {
  padding: 60px;
  .ingresar-login {
    width: 100%;
  }
  .img-inicial,
  .form-login {
    display: block;
    margin: auto;
  }
  .form-login {
    width: 300px;
    .el-input {
      margin-bottom: 10px;
    }
  }
}
</style>

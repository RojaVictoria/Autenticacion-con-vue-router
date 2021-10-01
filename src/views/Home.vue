<template>
  <div class="home">
    <el-container>
      <el-header>
        Módulo ajustes
        <el-button type="info" icon="el-icon-back" circle @click="logout" title="logout"></el-button>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu :default-openeds="['1', '3']">
            <el-submenu index="1">
              <template slot="title"><i class="el-icon-menu"></i>Menú</template>
              <el-submenu index="1-4">
                <template slot="title">Usuarios</template>
                <el-menu-item index="1-4-1">Mantenedor</el-menu-item>
              </el-submenu>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>Contenido</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Firebase from 'firebase';

export default {
  name: 'Home',
  data() {
    return {
    };
  },
  methods: {
    logout() {
      this.$router.push('login');
    }
  }
}
</script>

<style lang="scss" scoped>
.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
  .el-button {
    float: right;
    margin-top: 10px;
    }
}
.el-aside {
  color: #333;
}
</style>

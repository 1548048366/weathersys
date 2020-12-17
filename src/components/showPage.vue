<template>
<div>
  <el-row class="top-status">
    <el-col :span="4">
      <div class="top-status-innerLeft"><i class="el-icon-more"></i></div>
    </el-col>
    <el-col :span="16">
      <div class="cityName">{{ titleName[index] }}</div>
    </el-col>
    <el-col :span="4">
      <div class="top-status-innerLeft">
          <el-dropdown trigger="click" @command="cityChoose">
            <span class="top-status-innerLeft el-dropdown-link">
              <i class= "el-icon-arrow-down el-icon-plus"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="/chengdu">成都</el-dropdown-item>
              <el-dropdown-item command="/dazhou">达州</el-dropdown-item>
              <el-dropdown-item command="/yibin">宜宾</el-dropdown-item>
              <el-dropdown-item command="/xuanhan">宣汉</el-dropdown-item>
              <el-dropdown-item command="/mianyang">绵阳</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-col>
  </el-row>
  <router-view></router-view>
</div>

</template>

<script>
export default {
  name: "showPage",
  data() {
    return {
      titleName: ['成都市','达州市','宜宾市','宣汉市','绵阳市'],
      index: 0
    }
  },
  methods: {
    cityChoose(city) {
      this.$router.replace(city)
      if (city === '/chengdu') {
        this.index = 0
      }
      if (city === '/dazhou') {
        this.index = 1
      }
      if (city === '/yibin') {
        this.index = 2
      }
      if (city === '/xuanhan') {
        this.index = 3
      }
      if (city === '/mianyang') {
        this.index = 4
      }
    }
  },
  components: {
  }
}
</script>

<style scoped>
@import "../assets/css/showPage.css";

</style>

<template>
  <div id="app">
    <Card id="nav">
      <Button @click="handleZhCN">中文</Button>
      <br />
      <br />
      <Button type="info" @click="handleEnglish">English</Button>
    </Card>
    <router-view />
  </div>
</template>

<script>
export default {
  methods: {
    handleZhCN() {
      console.log(this.$i18n)
      this.$i18n.locale = 'zh'
    },
    handleEnglish() {
      console.log(this.$i18n)
      this.$i18n.locale = 'en'
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  width: 300px;
  margin: 50px auto;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">基本</router-link> |
      <router-link to="/toolbar">自定义工具条</router-link>|
      <router-link to="/auto">自动提示</router-link>|
      <router-link to="/set">自定义提示</router-link>|
      <router-link to="/split">分割editor</router-link>|
      <router-link to="/static_highlight">任意静态代码片段高亮</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  text-align: center;
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

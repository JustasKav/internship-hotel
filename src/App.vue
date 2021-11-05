<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/createbooking">Create booking</router-link>|
    <router-link to="/checkbooking">Check booking</router-link>
  </div>
  <router-view />
</template>

<style>
* {
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  width: 30%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

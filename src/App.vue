<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> | <br>
    <router-link to="/countdown">Count down</router-link> | 
    <router-link to="/todoapp">Todo</router-link> | 
    <router-link to="/calculator">Calculator</router-link> | 
    <router-link to="/weatherapp">WeatherApp</router-link> |
    <router-link to="/employeedetails">Employee Details</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 10px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

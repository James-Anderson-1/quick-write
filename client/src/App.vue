
<template>
  <div>
    <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/register">Register</router-link>
  </nav>
  <!-- <router-view/> -->
    <header>
      <!-- <h1>Welcome to My App</h1> -->
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <!-- <p>&copy; 2024 My App</p> -->
    </footer>
  </div>
</template>

<script>
export default {
  // Your component options go here
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

body {
  background-color: #121212;
  color: white;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: grey;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

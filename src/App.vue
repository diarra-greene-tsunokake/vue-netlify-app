<script setup>

</script>

<template>
   <nav class="nav-container">
    <router-link to="/" class="home-nav">Home</router-link> 
    <router-link to="/contact" class="home-nav">Contact</router-link>
  </nav>
  <router-view />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.nav-container {
  display: flex;
  flex-direction: row; /* Default: row, but good to be explicit */
  gap: 20px; /* Optional spacing between links */
  padding-top: 20px;
  padding-left: 20px;
  background-color: antiquewhite;
padding-bottom: 10px;
}

.home-nav {
  font-weight: bold;
  font-size: 1.8em;
  color: black;
  text-decoration: none;
}
</style>

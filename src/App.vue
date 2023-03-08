<template>
  <header>
    <nav class="nav-container">
      <div class="nav-brand">
        <h1></h1>
      </div>
      <ul>
        <li><router-link to="/register" class="nav-link">Register</router-link></li>
        <li><router-link to="/login" class="nav-link">Login</router-link></li>
      </ul>
      
    </nav>
  </header>
  <router-view />
</template>
<style scoped>
  header {
    background-color: rgb(254, 255, 255);
    color: #5121aa;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
  }

  .nav-container {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
  }

  .nav-brand {
    text-align: center;
    margin: 0;
  }

  nav ul {
    display: flex;
    gap: 1rem;
    margin: 0;
  }

  nav li {
    list-style: none;
  }

  .nav-link {
    color: #622caa;
    text-decoration: none;
    padding: 1rem;
    border-radius: 0.5rem;
    transition: all 0.2s ease-in-out;
  }

  .nav-link:hover {
    background-color: #7638d8;
    color: #333;
  }
</style>
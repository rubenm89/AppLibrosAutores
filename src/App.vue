<template>
  <div id="app">
    <header>
      <nav>        
        <router-link to="/books">Libros</router-link>
        <router-link to="/">Inicio</router-link>        
        <router-link to="/authors">Autores</router-link>
      </nav>
    </header>
    <main>
      <h1>  App de Libros y Autores</h1>
      <router-view />      
    </main>
    <footer>
      <p>Laboratorio 3 - Cursado Intensivo - 2024</p>
    </footer>
  </div>
</template>

<script>

import './assets/style.css';

export default {
  name: 'App',
};
</script>

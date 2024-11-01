<template>
  <div>
    <h2>Detalles del autor</h2>
    <p>Nombre: {{ author.param1 }}</p>
    <p>Apellido: {{ author.param2 }}</p>
    <button @click="goBack">Volver</button>
  </div>
</template>

<script>
import axios from '../axios';  

export default {
  data() {
    return {
      author: {},
    };
  },
  methods: {
    async fetchAuthor() {
      try {
        const { id } = this.$route.params;
        const response = await axios.get(`authors/${id}`);
        this.author = response.data;
      } catch (error) {
        console.error('Error al obtener detalles del autor:', error);
      }
    },
    goBack() {
      this.$router.push('/authors');
    },
  },
  mounted() {
    this.fetchAuthor();
  },
};
</script>
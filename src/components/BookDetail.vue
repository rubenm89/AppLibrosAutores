<template>
  <div>
    <h2>Detalles del libro</h2>
    <p>Título: {{ book.param1 }}</p>
    <p>Autor: {{ book.param2 }}</p>
    <p>Editorial: {{ book.param3 }}</p>    
    <button @click="goBack">Volver</button>
    <button @click="submitDelete">Eliminar Libro</button>      
  </div>
</template> 

<script>
import axios from '../service/axios';

export default { 
  data() {
    return {
      book: {},
    };
  },
  methods: {    
    async fetchBook() {
        try {
          const { id } = this.$route.params;
          const response = await axios.get(`books/${id}`);
          this.book = response.data;
        } catch (error) {
          console.error('Error al obtener detalles del libro:', error);
        }
      },
    goBack() {
      this.$router.push('/books');
    },
    
  },
  mounted() {
    this.fetchBook();
  },
};
</script>

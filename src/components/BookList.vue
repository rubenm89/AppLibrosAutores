<template> 
  <div class="table-container">
    <h2>Listado de Libros</h2>
    <table class="table">
      <thead>
        <tr>
          <th>Título</th>
          <th>Autor</th>
          <th>Editorial</th>
          <th>-</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book in books" :key="book.idcod">
          <td>{{ book.param1 }}</td>
          <td>{{ book.param2 }}</td>
          <td>{{ book.param3 }}</td>
          <td class="table-actions">
            <button class="button" @click="viewBookDetail(book.idcod)">Ver Detalles</button>
          </td>
        </tr>
      </tbody>
    </table>
    <button class="button" @click="goBack">Volver</button>
    <AddBookForm @book-added="fetchBooks" /> 
  </div>
</template>

<script>
import axios from '../service/axios';
import AddBookForm from './AddBookForm.vue';

export default {
  components:{
    AddBookForm,
  },
  data() {
    return {
      books: [],
    };
  },
  methods: {
    async fetchBooks() {
      try {
        const response = await axios.get('books');
        this.books = response.data;
      } catch (error) {
        console.error('Error al obtener el listado de libros:', error);
      }
    },
    viewBookDetail(id) {
      this.$router.push(`/book/${id}`);
    },
    goBack() {
      this.$router.push('/');  
    },
    async handleBookDeleted() {
      await this.fetchBooks(); 
    },
  },
  mounted() {
    this.fetchBooks();
  },
};
</script> 

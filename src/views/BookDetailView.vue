<template>
  <div class="table-container">
    <h2>Detalles del Libro</h2>
    <table class="table">
      <tbody>
        <tr>
          <td><strong>Título:</strong></td>
          <td>{{ book.param1 }}</td>
        </tr>
        <tr>
          <td><strong>Autor:</strong></td>
          <td>{{ book.param2 }}</td>
        </tr>
        <tr>
          <td><strong>Editorial:</strong></td>
          <td>{{ book.param3 }}</td>
        </tr>
      </tbody>
    </table>
    <div class="button-container">
      <button class="button" @click="submitDelete">Eliminar Libro</button>
      <EditBookForm :idcod="book.idcod" @bookUpdated="fetchBook" />
    </div>
  </div>
</template> 

<script>
import axios from '../service/axios';
import EditBookForm from '@/components/EditBookForm.vue';

export default {
  props: ['id'],
  components:{
    EditBookForm,
  },

  data() {
    return {        
      book:{},
    };
  },
  methods: {
    async fetchBook() {
      try {          
        const response = await axios.get(`books/${this.id}`);
        this.book = response.data; 
      } catch (error) {
        console.error('Error al obtener los detalles del libro:', error);
      }
    },
    async submitDelete() {
    const confirmed = confirm("¿Seguro que desea eliminar?");
    if (confirmed) {
      try {
        const bookToDelete = {
          idcod: this.book.idcod, 
        };
        await axios.delete('books', { data: bookToDelete });
        this.$emit('bookDeleted');
        alert('Libro eliminado exitosamente.');
        this.$router.push('/books'); 
        } catch (error) {
          alert('Error al eliminar el libro.');
          console.error('Error al eliminar el libro:', error.response || error);
        }
      }
    }      
  },
  
  mounted() {
    this.fetchBook();
  },
};
</script>


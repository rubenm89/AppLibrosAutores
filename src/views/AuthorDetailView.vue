<template>
  <div class="table-container">
    <h2>Detalles del Autor</h2>
    <table class="table">
      <tbody>
        <tr>
          <td><strong>Nombre:</strong></td>
          <td>{{ author.param1 }}</td>
        </tr>
        <tr>
          <td><strong>Apellido:</strong></td>
          <td>{{ author.param2 }}</td>
        </tr>
      </tbody>
    </table>
    <div class="button-container">
      <button class="button" @click="submitDelete">Eliminar Autor</button>
      <EditAuthorForm :idcod="author.idcod" @authorUpdated="fetchAuthor" />
    </div>
  </div>
</template>

<script> 
import axios from '../service/axios';
import EditAuthorForm from '@/components/EditAuthorForm.vue';

export default {
  props: ['id'], 
  components: {
  EditAuthorForm,
  },

  data() {
    return {
      author: {},
    };
  },

  methods: {
    async fetchAuthor() {
      try {
        const response = await axios.get(`authors/${this.id}`);
        this.author = response.data;
      } catch (error) {
        console.error('Error al obtener los detalles del autor:', error);
      }
    },
    async submitDelete() {
      const confirmed = confirm("¿Seguro que desea eliminar?");
      if (confirmed) {
      try {
        const authorToDelete = {
          idcod: this.author.idcod, 
        };

        await axios.delete(`authors`, { data: authorToDelete }); 

        this.$emit('authorDeleted'); 
        alert('Autor eliminado exitosamente.'); 
        this.$router.push('/authors');         
      } catch (error) {
        alert('Error al eliminar el autor.'); 
        console.error('Error al eliminar el autor:', error.response || error);
      }
    }
  }
  },

  mounted() {
    this.fetchAuthor();
  },
};
</script>

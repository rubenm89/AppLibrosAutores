<template> 
  <div class="table-container">
    <h2>Listado de Autores</h2>
    <table class="table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>-</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="author in authors" :key="author.idcod">
          <td>{{ author.param1 }}</td>
          <td>{{ author.param2 }}</td>
          <td class="table-actions">
            <button class="button" @click="viewAuthorDetail(author.idcod)">Ver Detalles</button>
          </td>
        </tr>
      </tbody>
    </table>
    <button class="button" @click="goBack">Volver</button>
    <AddAuthorForm @author-added="fetchAuthors" />
  </div>
</template>

<script>
import axios from '../service/axios';
import AddAuthorForm from './AddAuthorForm.vue'; 

export default {
  components: {
    AddAuthorForm,
  },
  data() {
    return {
      authors: [],
    };
  },
  methods: {
    async fetchAuthors() {
      try {
        const response = await axios.get('authors');
        this.authors = response.data;
      } catch (error) {
        console.error('Error al obtener el listado de autores:', error);
      }
    },
    viewAuthorDetail(id) {
      this.$router.push(`/author/${id}`); 
    },
    goBack() {
      this.$router.push('/'); 
    },
    async handleAuthorDeleted() {
      await this.fetchAuthors(); 
    },
   
  },
  mounted() {
    this.fetchAuthors();
  },
};
</script>
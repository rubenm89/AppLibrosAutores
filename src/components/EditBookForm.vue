<template>
  <div class="form-container">
    <h2>Editar Libro</h2>
    <form @submit.prevent="submitEdit">
      <table class="form-table">
        <tbody>
          <tr>
            <td><label for="titulo">Título:</label></td>
            <td><input v-model="titulo" id="titulo" required /></td>
          </tr>
          <tr>
            <td><label for="autor">Autor:</label></td>
            <td><input v-model="autor" id="autor" required /></td>
          </tr>
          <tr>
            <td><label for="editorial">Editorial:</label></td>
            <td><input v-model="editorial" id="editorial" required /></td>
          </tr>
        </tbody>
      </table>
      <div class="button-container">
        <button type="submit" class="button">Guardar Cambios</button>
      </div>
    </form>
  </div>
</template>
  
<script>
import axios from '../service/axios';

export default {
  props: ['idcod'], 
  data() {
    return {
      titulo: '',
      autor: '',
      editorial:'',
    };
  },
  methods: {
    async fetchBook() {
      try {
        const response = await axios.get(`books/${this.idcod}`); 
        this.titulo = response.data.param1;
        this.autor = response.data.param2;
        this.editorial = response.data.param3;
      } catch (error) {
        console.error('Error al obtener el libro:', error);
      }
    },      
    async submitEdit() {        
      try {
          const updatedBook = {
          idcod: this.idcod, 
          param1: this.titulo,
          param2: this.autor,
          param3: this.editorial,
          };                  
          await axios.patch(`books`, updatedBook);
          this.$emit('bookUpdated'); 
          alert('libro actualizado exitosamente.');
      } catch (error) {
          alert('Error al actualizar el libro.'); 
          console.error('Error al actualizar el libro:', error.response || error);
      }
  }
  
  },
  mounted() {
    this.fetchBook();
  },
};
</script>

<style scoped>
.form-container {
  max-width: 600px;
  margin: auto;
}

.form-table {
  width: 100%;
  border-collapse: collapse;
}

.form-table td {
  padding: 10px;
}

</style> 
 
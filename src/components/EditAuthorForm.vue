<template>
  <div class="form-container">
    <h2>Editar Autor</h2>
    <form @submit.prevent="submitEdit">
      <table class="form-table">
        <tbody>
          <tr>
            <td><label for="nombre">Nombre:</label></td>
            <td><input v-model="nombre" id="nombre" required /></td>
          </tr>
          <tr>
            <td><label for="apellido">Apellido:</label></td>
            <td><input v-model="apellido" id="apellido" required /></td>
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
      nombre: '',
      apellido: '',
    };
  },
  methods: {
    async fetchAuthor() {
      try {
        const response = await axios.get(`authors/${this.idcod}`); 
        this.nombre = response.data.param1;
        this.apellido = response.data.param2;
      } catch (error) {
        console.error('Error al obtener el autor:', error);
      }
    },      
    async submitEdit() {
      try {
          const updatedAuthor = {
          idcod: this.idcod, 
          param1: this.nombre,
          param2: this.apellido,
          };            
          await axios.patch(`authors`, updatedAuthor);
          this.$emit('authorUpdated'); 
          alert('Autor actualizado exitosamente.');
      } catch (error) {
          alert('Error al actualizar el autor.'); 
          console.error('Error al actualizar el autor:', error.response || error);
      }
  }
  
  },
  mounted() {
    this.fetchAuthor();
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
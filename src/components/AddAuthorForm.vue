<template>
  <div class="conteniner">
    <h2>Agregar Autor</h2>
    <form @submit.prevent="submitAuthor">
      <div class="form">
        <div >
          <label for="nombre">Nombre:</label>
          <input v-model="nombre" id="nombre" required />
        </div>
        <div>
          <label for="apellido">Apellido:</label>
          <input v-model="apellido" id="apellido" required />
        </div>
      <button class="button" type="submit">Agregar Autor</button>
      </div>
    </form>
  </div>
</template>

<script>
import { addAuthor } from '@/service/axios';

export default {
  data() {
    return {
      nombre: '',
      apellido: '',
    };
  },
  methods: {
    async submitAuthor() {
      try {
        const nuevoAutor = {
          param1: this.nombre,
          param2: this.apellido,
        };
        await addAuthor(nuevoAutor);
        this.$emit('authorAdded');
        alert("Autor agregado exitosamente.");
        this.nombre = '';
        this.apellido = '';
      } catch (error) {
        alert("Error al agregar el autor.");
      }
    },
  },
};
</script>

<style scoped>
  .button {
  padding: 10px 20px;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 5px;
}
.button:hover {
  background-color: #0056b3;
}
</style>

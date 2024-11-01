<template>
  <div class="conteniner">
    <h2>Agregar Libro</h2>
    <form @submit.prevent="submitBook">
      <div class="form">
        <div>
        <label for="titulo">Título:</label>
        <input v-model="titulo" id="titulo" required />
      </div>
      <div>
        <label for="autor">Autor:</label>
        <input v-model="autor" id="autor" required />
      </div>
      <div>
        <label for="editorial">Editorial:</label>
        <input v-model="editorial" id="editorial" required />
      </div>
      <button class="button" type="submit">Agregar Libro</button>

      </div>
      
    </form>
  </div>
</template>

<script>
import { addBook } from '@/service/axios';

export default {
  data() {
    return {
      titulo: '',
      autor: '',
      editorial: '',
    };
  },
  methods: {
    async submitBook() {
      try {
        const nuevoLibro = {
          param1: this.titulo,
          param2: this.autor,
          param3: this.editorial,
        };
        await addBook(nuevoLibro);
        this.$emit('bookAdded');
        alert("Libro agregado exitosamente.");
        this.titulo = '';
        this.autor = '';
        this.editorial = '';
      } catch (error) {
        alert("Error al agregar el libro.");
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
<script setup>
import { ref } from 'vue';
import axios from 'axios';

const API_ENDPOINT = 'https://my-json-server.typicode.com/dmitrijt9/book-api-mock/books';

const newBook = ref({
  title: '',
  author_id: '', // Utiliser une chaîne vide initialement pour simplifier la saisie dans le formulaire
  releaseDate: '',
  cover_image: ''
});

const addBook = async () => {
  // Adapter l'objet envoyé à ce que l'API attend
  const bookData = {
    title: newBook.value.title,
    author_id: parseInt(newBook.value.author_id, 10), // Convertir en nombre
    releaseDate: newBook.value.releaseDate,
    cover_image: newBook.value.cover_image
  };

  try {
    const response = await axios.post(API_ENDPOINT, bookData);
    console.log('Livre ajouté avec succès:', response.data);

    // Réinitialiser newBook à son état initial après l'ajout
    Object.assign(newBook.value, {
      title: '',
      author_id: '',
      releaseDate: '',
      cover_image: ''
    });
  } catch (error) {
    console.error('Erreur lors de l\'ajout du livre:', error);
  }
};
</script>

<template>
  <div class="admin-books-create">
    <div class="form-container">
      <h1 class="form-title">Add a new book</h1>
      <form @submit.prevent="addBook">
        <div class="form-group">
          <label for="title">Title</label>
          <input type="text" id="title" v-model="newBook.title" class="form-control" required />
        </div>
        <div class="form-group">
          <label for="author_id">Author ID</label>
          <input type="number" id="author_id" v-model="newBook.author_id" class="form-control" required />
        </div>
        <div class="form-group">
          <label for="releaseDate">Publication Year</label>
          <input type="text" id="releaseDate" v-model="newBook.releaseDate" class="form-control" />
        </div>
        <div class="form-group">
          <label for="cover_image">Cover Image URL</label>
          <input type="text" id="cover_image" v-model="newBook.cover_image" class="form-control" required />
        </div>
        <button type="submit" class="btn btn-primary">Add Book</button>
      </form>
    </div>
  </div>
</template>

  
  
  <style scoped>
  .admin-books-create {
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .form-container {
    margin-bottom: 20px;
  }
  
  .form-title {
    color: #333;
    margin-bottom: 30px;
    text-transform: uppercase;
    font-size: 24px;
    font-weight: 600;
    text-align: center;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    color: #333;
    margin-bottom: 5px;
    font-size: 16px;
    font-weight: 500;
  }
  
  .form-control {
    display: block;
    width: 100%;
    padding: 10px 15px;
    font-size: 14px;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 4px;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  }
  
  .form-control:focus {
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
  
  .btn-primary {
    color: #fff;
    background-color: #007bff !important;
    border-color: #007bff;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 4px;
    cursor: pointer;
    display: inline-block;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    line-height: 1.5;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  }
  
  .btn-primary:hover {
    background-color: #0056b3;
    border-color: #0056b3;
  }
  
  textarea.form-control {
    height: auto;
  }
  
  /* Ajout de petites animations sur les inputs pour un effet plus moderne */
  .form-control {
    transition: all 0.3s ease-in-out;
  }
  
  .form-control:focus {
    transform: scale(1.03);
  }
  </style>
  
  
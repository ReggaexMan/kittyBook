<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter, useRoute } from 'vue-router';

const route = useRoute();
const router = useRouter();

const bookId = ref(route.params.id);
const updatedBook = ref({
  title: '',
  author_id: '', // Modification ici pour utiliser author_id
  releaseDate: '', // Modification pour utiliser releaseDate
  cover_image: ''
});
// Correction de l'URL de l'API pour inclure l'ID du livre
const API_ENDPOINT = `https://my-json-server.typicode.com/dmitrijt9/book-api-mock/books/${bookId.value}`;

onMounted(async () => {
  try {
    const response = await axios.get(API_ENDPOINT);
    if (response.status === 200) {
      // Supposer que la réponse contient les champs attendus directement
      updatedBook.value = { ...response.data, author_id: response.data.author_id.toString() }; // Convertir author_id en chaîne si nécessaire
    }
  } catch (error) {
    console.error('Error fetching book data:', error);
  }
});

const updateBook = async () => {
  try {
    // Convertir author_id en nombre avant l'envoi
    const bookData = { ...updatedBook.value, author_id: parseInt(updatedBook.value.author_id, 10) };
    const response = await axios.put(API_ENDPOINT, bookData);
    if (response.status === 200) {
      alert('Book updated successfully!');
      router.push('/admin/books'); // Redirige l'utilisateur après la mise à jour
    }
  } catch (error) {
    console.error('Error updating book:', error);
    alert('Failed to update book.');
  }
};

const deleteBook = async () => {
  const confirmation = confirm('Are you sure you want to delete this book?');
  if (confirmation) {
    try {
      const response = await axios.delete(API_ENDPOINT);
      if (response.status === 200) {
        alert('Book deleted successfully!');
        router.push('/admin/books'); // Redirige l'utilisateur après la suppression
      }
    } catch (error) {
      console.error('Error deleting book:', error);
      alert('Failed to delete book.');
    }
  }
};
</script>


<template>
  <div class="admin-books-update">
    <h1 class="form-title text-center">Update Book</h1>
    <form @submit.prevent="updateBook">
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" id="title" v-model="updatedBook.title" class="form-control" required />
      </div>
      <div class="form-group">
        <label for="author_id">Author ID</label>
        <input type="text" id="author" v-model="updatedBook.author" class="form-control" required />
      </div>
      <div class="form-group">
        <label for="releaseDate">Release Date</label>
        <input type="text" id="publicationYear" v-model="updatedBook.publication_year" class="form-control" required />
      </div>
      <div class="form-group">
        <label for="coverImage">Cover Image URL</label>
        <input type="text" id="coverImage" v-model="updatedBook.cover_image" class="form-control" required />
      </div>
      <button type="submit" class="btn btn-primary">Update Book</button>
      <button type="button" @click="deleteBook" class="btn btn-danger">Delete Book</button>
    </form>
  </div>
</template>


<style scoped>
.admin-books-update {
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
  margin-right: 5px;
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

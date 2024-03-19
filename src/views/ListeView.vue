<script setup>
import { onBeforeMount, ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const API_ENDPOINT_BOOKS = 'https://my-json-server.typicode.com/dmitrijt9/book-api-mock/books';
const API_ENDPOINT_AUTHORS = 'https://my-json-server.typicode.com/dmitrijt9/book-api-mock/authors';

const books = ref([]);
const authors = ref([]);
const isLoaded = ref(false);

const router = useRouter();

const fetchAuthors = async () => {
  const response = await axios.get(API_ENDPOINT_AUTHORS);
  authors.value = response.data;
};

const fetchBooks = async () => {
  await fetchAuthors(); // Assure-toi de charger les auteurs en premier.
  const response = await axios.get(API_ENDPOINT_BOOKS);
  books.value = response.data.map(book => {
    const author = authors.value.find(author => author.id === book.author_id);
    return { ...book, authorName: `${author.name} ${author.surname}`, releaseDate: book.releaseDate };
  });
  isLoaded.value = true;
};

onBeforeMount(fetchBooks);

const goToDetails = (bookId) => {
  router.push({ name: 'detail', params: { id: bookId } });
};
</script>

<template>
  <div class="container px-4 px-lg-5 mt-5">
    <h3 v-if="!isLoaded">Data is loading ...</h3>
    <table class="table" v-else>
      <thead>
        <tr>
          <th scope="col">Titre</th>
          <th scope="col">Auteur</th>
          <th scope="col">Année</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book in books" :key="book.id">
          <td>{{ book.title }}</td>
          <td>{{ book.authorName }}</td>
          <td>{{ book.releaseDate }}</td>
          <td><button @click="goToDetails(book.id)" type="button" class="btn btn-primary btn-lg">📖 Voir</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

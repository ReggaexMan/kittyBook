<script setup>
import { onBeforeMount, ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const API_ENDPOINT = 'https://my-json-server.typicode.com/dmitrijt9/book-api-mock/books';

const allBooks = ref([]); // Pour stocker tous les livres
const localBooks = ref([]); // Pour les livres de la page actuelle
const currentPage = ref(1);
const booksPerPage = ref(10);
const isLoaded = ref(false);

const router = useRouter();

const goToDetails = (bookId) => {
  console.log("Hey cliquage sur " + bookId);
  router.push({ 
    name: 'detail',
    params: {
        id: bookId
    },
  });
};

// Calcule les livres à afficher sur la page actuelle
const paginatedBooks = () => {
  const start = (currentPage.value - 1) * booksPerPage.value;
  const end = start + booksPerPage.value;
  localBooks.value = allBooks.value.slice(start, end);
};

onBeforeMount(async () => {
  const response = await axios.get(API_ENDPOINT);
  const { data, status } = response;
  if (status == 200) {
    allBooks.value = data;
    isLoaded.value = true;
    paginatedBooks(); // Initialise les livres de la première page
  } else {
    console.log('OUPS :(');
  }
});

// Calcul des pages totales
const totalPages = computed(() => {
  return Math.ceil(allBooks.value.length / booksPerPage.value);
});

// Fonction pour changer de page
const changePage = (page) => {
  currentPage.value = page;
  paginatedBooks();
};
</script>

<template>
  <div class="tm-main-content">
    <section class="tm-margin-b-l">
      <header>
        <h2 class="tm-main-title">Welcome to our bookstore</h2>    
      </header>
      <p>Welcome to your Online Bookstore, your one-stop shop for all things books. We offer a wide variety of books from different genres, eras, and authors. Whether you're looking for a classic novel, a gripping mystery, or a heartwarming romance, we have something for everyone.

      We also offer a variety of features to make your shopping experience as convenient and enjoyable as possible. You can browse our catalog by genre, author, or title. You can also create a wishlist of books you'd like to read later. And if you're not sure what you're looking for, our team of experts is always happy to help.

      We are committed to providing our customers with the best possible book shopping experience. That's why we offer free shipping on all orders over $50. We also offer a variety of discounts and promotions throughout the year.

      So what are you waiting for? Start shopping today and discover your new favorite book!</p>
      <div class="tm-gallery">
        <div class="row">
          <figure
            class="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item"
            v-for="book in localBooks"
            :key="book.id"
            @click="goToDetails(book.id)"
          >
            <img :src="book.cover_image" :alt="book.title" class="img-fluid tm-img-center" />
            <p class="tm-figcaption">{{ book.title }}</p>
          </figure>
        </div>
      </div>
      <nav class="tm-gallery-nav">
        <ul class="nav justify-content-center">
          <li class="nav-item" v-for="page in totalPages" :key="page">
            <a class="nav-link" href="#" @click.prevent="changePage(page)">{{ page }}</a>
          </li>
        </ul>
      </nav>
    </section>
  </div>
</template>

<style scoped>
</style>

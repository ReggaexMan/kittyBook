<script setup>
import { ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const bookId = route.params.id;
const currentBook = ref({});

const API_ENDPOINT = 'https://my-json-server.typicode.com/dmitrijt9/book-api-mock/books';

onBeforeMount(async () => {
    try {
        const response = await axios.get(`${API_ENDPOINT}/${bookId}`);
        currentBook.value = response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des données du livre:', error);
    }
});
</script>

<template>        
    <div class="container px-4 px-lg-5 mt-5">
        <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <div class="col mb-5">
                <div class="card h-100">
                    <!-- Div conteneur pour centrer l'image -->
                    <div class="image-container" v-if="currentBook.cover_image">
                        <!-- Book image with custom class for styling -->
                        <img class="card-img-top custom-image" :src="currentBook.cover_image" :alt="currentBook.title" />
                    </div>
                    <!-- Book details-->
                    <div class="card-body p-4">
                        <div class="text-center">
                            <!-- Book name-->
                            <h5 class="fw-bolder">{{ currentBook.title }}</h5>
                            <!-- Additional book information could go here -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.custom-image {
    max-width: 100%; /* Correction pour s'adapter à la largeur du conteneur */
}

.image-container {
    text-align: center;
    padding: 20px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>

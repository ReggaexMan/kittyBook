<script setup>
import { RouterLink } from 'vue-router';

</script>


<template>

    <nav class="navbar navbar-expand-md tm-main-nav-container">

        <div class="collapse navbar-collapse tm-main-nav" id="tmMainNav">
            <ul class="nav nav-fill tm-main-nav-ul">
                <li class="nav-item">
                    <router-link :to="{ name: 'home' }" class="nav-link">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{ name: 'liste' }" class="nav-link">Liste</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{ name: 'AdminBooksList' }" class="nav-link">Admin</router-link>
                </li>
            </ul>
        </div>
</nav>
                
</template>

<style scoped>

</style>
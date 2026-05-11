<script setup>
import { useMoviesStore } from '../stores/moviesStore';
import  MovieCard  from './MovieCard.vue';
const moviesStore = useMoviesStore();
</script>

<template>
  <div class="p-4">
    <h2 class="text-2xl font-bold mb-4">Favorite Movies</h2>
    <ul>
      <li v-for="movie in moviesStore.favoriteMovies" :key="movie.title" class="mb-2">
        <MovieCard :title="movie.title" :year="movie.year" variant="favs" />
      </li>

    </ul>
  </div>
</template>
<script setup>
import { useMoviesStore } from '../stores/moviesStore';
import MovieCard from './MovieCard.vue';
const moviesStore = useMoviesStore();

</script>

<template>
  <div class="p-4">
    <input v-model="moviesStore.searchQuery" placeholder="Search for a movie..." class="border p-2 w-full mb-4" />
    <ul>
      <li v-for="movie in moviesStore.filteredMovies" :key="movie.title" class="mb-2">
        <MovieCard :title="movie.title" :year="movie.year">
          <template #actions>
            <button @click="moviesStore.addToFavs(movie)" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-purple-300">Add to Favorites</button>
          </template>
        </MovieCard>
      </li>
    </ul>
  </div>
</template>
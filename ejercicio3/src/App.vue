<script setup>
import MovieSearch from './components/MovieSearch.vue';
import MovieFavs from './components/MovieFavs.vue';
</script>

<template>
  <div class="app-container p-4 bg-linear-to-r from-blue-200 to-purple-300 min-h-screen">
    <h1 class="text-3xl font-bold border-b-2 border-amber-500 bg-amber-250 mb-4">Movie Search</h1>
    <MovieSearch />
    <MovieFavs />
  </div>
</template>

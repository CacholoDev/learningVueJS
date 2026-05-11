<script setup>
import { computed } from 'vue';
import { useMoviesStore } from '../stores/moviesStore';

const props = defineProps({
  title: String,
  year: Number,
  variant: {
    type: String,
    default: 'search',
  },
});

const moviesStore = useMoviesStore();
const movie = {
  title: props.title,
  year: props.year,
};

const isSearch = computed(() => props.variant === 'search');
const isFavs = computed(() => props.variant === 'favs');
</script>

<template>
  <div class="border p-4">
    <h2 class="text-xl font-bold mb-2">{{props.title}}</h2>
    <p class="text-gray-600">{{props.year}}</p>
    <button v-if="isSearch" @click="moviesStore.addToFavs(movie)" class="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-purple-300">Add to Favorites</button>
    <button v-else-if="isFavs" @click="moviesStore.removeFromFavs(movie)" class="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">Remove</button>
  </div>
</template>
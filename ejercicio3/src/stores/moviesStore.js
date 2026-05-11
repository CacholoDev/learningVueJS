import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useMoviesStore = defineStore("movies", () => {
    const movies = ref([
        { id: 1, title: "El Padrino", year: 1972 },
        { id: 2, title: "Interstellar", year: 2014 },
        { id: 3, title: "El Señor de los Anillos", year: 2001 },
        { id: 4, title: "Pulp Fiction", year: 1994 },
        { id: 5, title: "Matrix", year: 1999 },
        { id: 6, title: "El Rey León", year: 1994 },
    ]);

    const favoriteMovies = ref([]);
    const searchQuery = ref("");


    const addToFavs = (movie) => {
        if (!favoriteMovies.value.some((m) => m.title === movie.title)) {
            favoriteMovies.value.push(movie);
        }
    };

    const filteredMovies = computed(() => {
        if (!searchQuery.value.trim()) {
            return movies.value;
        }
        return movies.value.filter((movie) =>
            movie.title.toLowerCase().includes(searchQuery.value.toLowerCase())
        );
    });
    
    const removeFromFavs = (movie) => {
        favoriteMovies.value = favoriteMovies.value.filter((m) => m.title !== movie.title);
    }; 

    return {
        movies,
        favoriteMovies,
        searchQuery,
        addToFavs,
        filteredMovies,
        removeFromFavs,
    };
});

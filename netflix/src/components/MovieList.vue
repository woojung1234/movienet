<template>
  <div>
    <h1>Movie List</h1>
    <ul>
      <li v-for="movie in movies" :key="movie.id">
        <img :src="getImageUrl(movie.poster_path)" :alt="movie.title" />
        <p>{{ movie.title }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'MovieList',
  data() {
    return {
      movies: [], // 영화 데이터를 저장할 배열
    };
  },
  async mounted() {
    try {
      const response = await axios.get(
          'https://api.themoviedb.org/3/movie/popular?api_key=1cc6831125c4a1baf8f809dc1f68ec14'
      );
      this.movies = response.data.results;
    } catch (error) {
      console.error('영화 데이터를 가져오는 중 오류가 발생했습니다:', error);
    }
  },
  methods: {
    getImageUrl(path) {
      return `https://image.tmdb.org/t/p/w300${path}`;
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin-bottom: 1em;
}
img {
  width: 100px;
  height: auto;
}
</style>

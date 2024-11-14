import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',  // TMDB API 기본 URL
    params: {
        api_key: process.env.VUE_APP_TMDB_API_KEY,  // 환경 변수에서 API 키 가져오기
    },
});

export default instance;

/* eslint-disable */

const API_BASE = 'https://api.themoviedb.org/3';
const API_KEY = 'b15312a073368028871202b6543ee610';

export default {
  getPopular() {
    const popular = fetch(
      `${API_BASE}/movie/popular?api_key=${API_KEY}&language=ko`,
    );
    return popular;
  },

  getTopRated() {
    const topRated = fetch(
      `${API_BASE}/movie/top_rated?api_key=${API_KEY}&language=ko`,
    );
    return topRated;
  },

  getDayPopular() {
    const dayPopular = fetch(
      `${API_BASE}/trending/movie/day?api_key=${API_KEY}&language=ko`,
    );
    return dayPopular;
  },

  getWeekPopular() {
    const weekPopular = fetch(
      `${API_BASE}/trending/movie/week?api_key=${API_KEY}&language=ko`,
    );
    return weekPopular;
  },

  getNowPlaying() {
    const nowPlaying = fetch(
      `${API_BASE}/movie/now_playing?api_key=${API_KEY}&language=ko`,
    );
    return nowPlaying;
  },

  getLatest() {
    const latest = fetch(
      `${API_BASE}/movie/latest?api_key=${API_KEY}&language=ko`,
    );
    return latest;
  },

  async getRuntime(movieId) {
    const response = await fetch(
      `${API_BASE}/movie/${movieId}?api_key=${API_KEY}&language=ko`,
    );
    const detail = await response.json();
    return detail.runtime;
  },

  async getCast(movieId) {
    const response = await fetch(
      `${API_BASE}/movie/${movieId}/credits?api_key=${API_KEY}&language=ko`,
    );
    const cast = await response.json();
    return cast.cast;
  },

  async getVideo(movieId) {
    const response = await fetch(
      `${API_BASE}/movie/${movieId}/videos?api_key=${API_KEY}&language=ko`,
    );
    const video = await response.json();
    return video.results.slice(0, 1)[0].key;
  },

  async getSearch(word) {
    const response = await fetch(
      `${API_BASE}/search/movie?api_key=${API_KEY}&query=${word}&include_adult=true&language=ko-KR`,
    );
    const res = await response.json();
    return res.results;
  },

  async getSimilar(id, page) {
    const genreIdsStr = id.join(',');
    const response = await fetch(
      `${API_BASE}/discover/movie?api_key=${API_KEY}&language=ko-KR&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreIdsStr}&with_watch_monetization_types=free`,
    );
    const res = await response.json();
    return res.results;
  },

  getGenreMovie(genre, page = 1) {
    const res = fetch(
      `${API_BASE}/discover/movie?api_key=${API_KEY}&with_genres=${genre}&language=ko&page=${page}`,
    );
    return res;
  },
};

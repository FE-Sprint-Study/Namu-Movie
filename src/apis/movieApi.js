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
};
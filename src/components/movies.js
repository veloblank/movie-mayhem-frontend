import MoviesAdapter from "../adapters/MoviesAdapter.js";

export default class Movies {
  constructor() {
    this.movies = [];
    this.adapter = new MoviesAdapter();
    this.fetchAndLoadMovies();
  }

  fetchAndLoadMovies() {
    this.adapter.getMovies().then(movies => {
      console.log(movies);
    });
  }
}

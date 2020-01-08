import MoviesAdapter from "../adapters/MoviesAdapter.js";
import Movie from "./movie.js";

export default class Movies {
  constructor() {
    this.movies = [];
    this.adapter = new MoviesAdapter();
    this.fetchAndLoadMovies();
  }

  fetchAndLoadMovies() {
    this.adapter
      .getMovies()
      .then(movies => {
        movies.forEach(movie => this.movies.push(new Movie(movie)));
      })
      .then(() => this.render());
  }

  render(movie) {
    let moviesContainer = document.getElementById("movies-list");
    for (let movie of this.movies) {
      let movieDiv = document.createElement("div");
      let moviePoster = document.createElement("img");
      let movieTitle = document.createElement("div");
      let movieSynopsis = document.createElement("p");

      movieDiv.classList.add("movie-card");
      moviePoster.src = movie.poster_src;
      movieTitle.innerHTML = movie.title;
      movieSynopsis.innerHTML = movie.synopsis;

      moviesContainer.appendChild(movieDiv);
      movieDiv.appendChild(moviePoster);
      movieDiv.append(movieTitle);
      movieTitle.append(movieSynopsis);
    }
  }
}

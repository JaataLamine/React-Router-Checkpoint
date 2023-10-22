import MovieCard from "./MovieCard";
import Filter from "./Filter";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import moviesJSON from "../assets/movies.json";

// This component display all movies and
// Allow us to filter movie and add movie
const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [titleFilter, setTitleFilter] = useState("");
  const [rateFilter, setRateFilter] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setMovies(moviesJSON);
  }, [movies.length]);

  const handleFilterChange = (filterType, value) => {
    if (filterType === "title") {
      setTitleFilter(value);
    } else if (filterType === "rating") {
      setRateFilter(value);
    }
  };

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      (!rateFilter || movie.rating >= Number(rateFilter))
  );

  // Implementing Form in App Component
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Get values from form fields
    const title = e.target.title.value;
    const description = e.target.description.value;
    const posterURL = e.target.posterURL.value;
    const rating = e.target.rating.value;

    // Create a new movie object
    const newMovie = { title, description, posterURL, rating };

    // Add the new movie to the list
    handleAddMovie(newMovie);

    // Clear the form
    e.target.reset();
  };

  return (
    <div className="">
      <button className="btn btn-info mt-3 mb-3" onClick={() => navigate(-1)}>
        Go Back
      </button>
      <h1>Movies</h1>

      {/* Filter movie by Titel and Rate */}

      <Filter
        handleFilterChange={handleFilterChange}
        titleFilter={titleFilter}
        rateFilter={rateFilter}
      />
      <div className="row row-cols-2 row-cols-md-4 g-4">
        {movies.map((movie) => (
          <div key={movie.id}>
            <MovieCard
              id={movie.id}
              posterURL={movie.posterURL}
              title={movie.title}
              rating={movie.rating}
            />
          </div>
        ))}
      </div>

      {/* Add New Movies */}

      <div className="add-movie-form">
        <div className="mt-3">
          <h2>Add a New Movie</h2>
        </div>
        {/* Implement a form to add new movies */}
        <form
          className="row row-cols-1 row-cols-md-1 g-1"
          onSubmit={handleFormSubmit}
        >
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" required />

          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" required />

          <label htmlFor="posterURL">Poster URL:</label>
          <input type="text" id="posterURL" name="posterURL" required />

          <label htmlFor="rating">Rating:</label>
          <input type="number" id="rating" name="rating" required />

          <div className="col-12 mb-3">
            <button
              className="btn btn-primary"
              type="submit"
              onClick={handleFormSubmit}
            >
              Add Movie
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MovieList;

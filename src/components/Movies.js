import React from "react";
import { movies } from "../data";

function Movies() {
  const moviesList = movies.map(movie=>(
    <div key={movie.title}>
      <h2>{movie.title}</h2>
      <p><i>Runtime: </i>{movie.time}</p>
      <ul><strong>Movies:</strong>
        {movie.genres.map(genre=>(
        <li key={genre}>{genre}</li>
      ))}
      </ul>
    </div>
  ))
  
  
  return <div>
    <h1>Movies Page</h1>
    {moviesList}
  </div>
}

export default Movies;

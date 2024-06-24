// import { useState, useEffect } from "react";
// import { IMovie } from "../../interfaces/Movie";
import MovieCard from "../../components/MovieCard";
import { useFetchMovies } from "../../hooks/useFetchMovies";
const moviesURL = String(import.meta.env.VITE_API);
//const apiKey = String(import.meta.env.VITE_API_KEY);
const token = String(import.meta.env.VITE_API_TOKEN);
import "./style.css";


export default function Home() {
  const { data: topMovies, loading } = useFetchMovies(moviesURL + "top_rated", null, token); 

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <div className="container">
      <h1 className="title">Best movies: </h1>
      <div className="movies-container">
        {!loading && topMovies && topMovies.length > 0 &&
          topMovies.map(movie => (
            <MovieCard key={movie.id} movie={movie} showLink={true} />
          ))
        }
        {!loading && topMovies && topMovies.length == 0 && <p>There are no movies</p>}
      </div>
    </div>
  )
}

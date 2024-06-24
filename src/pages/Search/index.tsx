// import { useState, useEffect } from "react";
import { useFetchMovies } from "../../hooks/useFetchMovies";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../../components/MovieCard";
import "./style.css";
// import { IMovie } from "../../interfaces/Movie";
const moviesSearchURL = String(import.meta.env.VITE_SEARCH);
const token = String(import.meta.env.VITE_API_TOKEN);
//const apiKey = String(import.meta.env.VITE_API_KEY);


export default function Search() {
  const [search] = useSearchParams();
  const searchText = search.get("q");
  const { data: movies, loading } = useFetchMovies(moviesSearchURL, searchText, token); 

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <h1 className="title">Results for: <span className="search-text">{searchText}</span></h1>
      <div className="movies-container">
        {!loading && movies && movies.length > 0 &&
          movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} showLink={true} />
          ))
        }
        {!loading && movies && movies.length == 0 && <p>There are no movies</p>}
      </div>
    </div>
  )
}

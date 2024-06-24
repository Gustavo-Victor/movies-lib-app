// import { useFetchData } from "../../hooks/useFetchData"
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../../components/MovieCard";
import { IMovie } from "../../interfaces/Movie";
import "./style.css";
const moviesSearchURL = String(import.meta.env.VITE_SEARCH);
//const apiKey = String(import.meta.env.VITE_API_KEY);
const token = String(import.meta.env.VITE_API_TOKEN);


export default function Search() {
  const [movies, setMovies] = useState<IMovie[]>([])
  const [search] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const searchText = search.get("q");
  // const customUrl = `${searchUrl}?api_key=${apiKey}&query=${searchText}`
  // const { data: movies, loading } = useFetchData(customUrl); 

  const getMoviesBySearch = async (url: string) => {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`
      }
    });

    const data = await response.json();
    setMovies(data.results);
    setLoading(false);
  }

  useEffect(() => {
    const customUrl = `${moviesSearchURL}?query=${searchText}`;
    getMoviesBySearch(customUrl);
  }, [searchText]);

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

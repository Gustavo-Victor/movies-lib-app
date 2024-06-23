import { useState, useEffect } from "react";
import { IMovie } from "../../interfaces/Movie";
import MovieCard from "../../components/MovieCard";
const moviesURL = String(import.meta.env.VITE_API);
const apiKey = String(import.meta.env.VITE_API_KEY);
import "./style.css";


export default function Home() {
  const [topMovies, setTopMovies] = useState<IMovie[]>([]);
  const [loading, setLoading] = useState(true);

  const getTopRatedMovies = async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();
    setTopMovies(data.results);
  }

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?api_key=${apiKey}`;
    getTopRatedMovies(topRatedUrl);
    setLoading(false);
  }, []);

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

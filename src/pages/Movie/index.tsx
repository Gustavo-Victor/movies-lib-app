// import { useState, useEffect } from "react"; 
// import { IMovieDetails } from "../../interfaces/Movie";
import { useFetchMovie } from "../../hooks/useFetchMovie";
import { useParams } from "react-router-dom";
import { formatCurrency } from "../../utils/numUtils";
import { 
  BsGraphUp,
  BsWallet2, 
  BsHourglassSplit, 
  BsFillFileEarmarkTextFill, 
  
} from "react-icons/bs";
import MovieCard from "../../components/MovieCard";
import "./style.css"; 
const apiURL = String(import.meta.env.VITE_API);
const token = String(import.meta.env.VITE_API_TOKEN);


export default function Movie() {
  const { id } = useParams();
  const { data: movie, loading } = useFetchMovie(apiURL, id, token); 

  if(loading) {
    return <p>Loading...</p>
  } 

  return (
    <div className="movie-page">
      {movie && (
        <>
          <MovieCard movie={movie} showLink={false} />
          <p className="movie-tagline">{movie.tagline}</p>
          <div className="movie-info">
            <h3><BsWallet2/> Budget: </h3>
            <p>{formatCurrency(Number(movie.budget))}</p>
          </div>
          <div className="movie-info">
            <h3><BsGraphUp/> Incomes: </h3>
            <p>{formatCurrency(Number(movie.revenue))}</p>
          </div>
          <div className="movie-info">
            <h3><BsHourglassSplit/> Duration: </h3>
            <p>{movie.runtime} min</p>
          </div>
          <div className="movie-info description">
            <h3><BsFillFileEarmarkTextFill/> Description: </h3>
            <p>{movie.overview}</p>
          </div>
        </>
      )}
    </div>
  )
}

import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { IMovie } from "../../interfaces/Movie";
import NoImage from "../../components/NoImage"; 
import "./style.css";
const imageUrl = import.meta.env.VITE_IMG;

interface Props {
    movie: IMovie;
    showLink?: boolean;
}

export default function MovieCard({ movie, showLink }: Props) {
    return (
        <div className="movie-card">
            {movie.poster_path ? (
                <img
                    className="movie-img"
                    src={`${imageUrl}${movie.poster_path}`}
                    alt={movie.title}
                    title={movie.title} />
                ):( 
                <NoImage />
            )}

            <h2 className="movie-title">{movie.title}</h2>
            <p className="movie-average"><FaStar />{movie.vote_average}</p>
            {showLink && <Link className="movie-link btn" to={`/movie/${movie.id}`}>Details</Link>}
        </div>
    )
}

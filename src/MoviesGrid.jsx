import movies from "./movies.json";
import styles from "./MoviesGrid.module.css";
import { MovieCard } from "./MovieCard.jsx";
export function MoviesGrid() {
    return (
        <ul className={styles.moviesGrid}>
            {movies.map(movie=><MovieCard key={movie.id} movie={movie}/>)}       
            {/*movies.map(function(movie) {
                return <li key={movie.id}>{movie.title}</li>
            })*/}       
        </ul>
    )
}


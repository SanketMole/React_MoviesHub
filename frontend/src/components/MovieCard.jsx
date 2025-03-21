<<<<<<< HEAD
import "../css/MovieCard.css"
import { useMovieContext } from "../contexts/MovieContext"


function MovieCard({movie}) {
    const {isFavorites, addToFavorites, removeFromFavorites} = useMovieContext()
    const favorite = isFavorites(movie.id)

    function onFavoriteClick(e) {
        e.preventDefault()
        if (favorite) removeFromFavorites(movie.id)
        else addToFavorites(movie)
    }

    return <div className="movie-card"> 
        <div className="movie-poster"> 
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <div className="movie-overlay">
                <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}>
=======

function MovieCard({movie}) {

    function onFavoriteClick() {
        alert("clicked")
    }

    return <div className="movie-card">
        <div className="movie-poster"> 
            <img src={movie.url} alt={movie.title} />
            <div className="movie-overlay">
                <button className="favorite-btn" onClick={onFavoriteClick}>
>>>>>>> 9a0876d1c72deb9ce13bde5b48465adfa73c8189
                    ♥
                </button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
<<<<<<< HEAD
            <p>{movie.release_date?.split("-")[0]}</p>
=======
            <p>{movie.release_date}</p>
>>>>>>> 9a0876d1c72deb9ce13bde5b48465adfa73c8189
        </div>
    </div>
}

export default MovieCard
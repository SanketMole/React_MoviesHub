import MovieCard from "../components/MovieCard"
<<<<<<< HEAD
import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../services/api";
import "../css/Home.css" 

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try{
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            } catch (err) {
                console.log(err)
                setError("Failed to load movies...")
            }
            finally{
                setLoading(false)
            }
        }
        loadPopularMovies()
    }, [])

    const handleSearch = async () => {
        e.preventDefault()
        if(!searchQuery.trim()) return 
        if(loading) return 

        setLoading(true)
        try{
            const searchResults = await searchMovies(searchQuery)
            setMovies(searchResults)
            setError(null)
        } catch (err) {
            console.log(err)
            setError("Failed to search Movies...")
        } finally {
            setLoading(false)
        }
    };
=======
import { useState } from "react";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        {id: 1, title: "John Wick", release_date: "2020"},
        {id: 2, title: "Terminator", release_date: "1999"},
        {id: 3, title: "The Matrix", release_date: "1998"},
    ]

    const handleSearch = () => {};
>>>>>>> 9a0876d1c72deb9ce13bde5b48465adfa73c8189

    return (
    <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input 
            type="text" 
            placeholder="Search for movies...." 
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            />
<<<<<<< HEAD
            <button type="submit" className="search-button">
                Search
            </button>
        </form>

            {error && <div className="error-message">{error}</div>}

        {loading ? (
            <div className="loading">Loading...</div>
        ) : (
            <div className="movies-grid">
                {movies.map(movie => (
                    (
                        <MovieCard movie={movie} key={movie.id} />
                    )
                ))}
            </div>
        )}    
   
=======
            <button type="submit" className="search-button">Search</button>
        </form>

        <div className="movies-grid">
            {movies.map(movie => (
                <MovieCard movie={movie} key={movie.id} />
            ))}
        </div>
>>>>>>> 9a0876d1c72deb9ce13bde5b48465adfa73c8189
    </div>
    );
}

<<<<<<< HEAD
export default Home;
=======
export default Home
>>>>>>> 9a0876d1c72deb9ce13bde5b48465adfa73c8189

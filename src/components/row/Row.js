import React, {useState, useEffect} from 'react'
import './row.css'
import axios from 'axios'
import MoviePopup from '../moviePopup/MoviePopup'

function Row({title, baseURL, fetchURL}) {
    const [movies, setMovies] = useState([])
    const [isClicked, setIsClicked] = useState(false)
    const [clickedMovie, setClickedMovie] = useState([])
    const baseImgURL = "https://image.tmdb.org/t/p/original/"

    useEffect(() => {  
        axios.get(`${baseURL}${fetchURL}`)
            .then(response => setMovies(response.data.results))
    }, [fetchURL])
    
    const handleClick = movie => {
        setIsClicked(true)
        setClickedMovie(movie)
    }

    return (
        <div className="row">
            <h1>{title}</h1>
            <div className="titles">
                {/* <div className="singleTitle">
                    <img src={baseImgURL + movies[0].poster_path} alt="poster" width="150"/>
                </div> */}

                {
                    movies.map(movie => {
                        return (
                            <div className="singleTitle" key={movie.poster_path}>
                                <img 
                                src={baseImgURL + movie.poster_path} 
                                alt="poster" 
                                width="150" 
                                key={movie.id}
                                onClick={() => handleClick(movie)}
                                />
                            </div>
                        )
                    })
                }
            </div>
            {isClicked && <MoviePopup clickedMovie={clickedMovie} setIsClicked={setIsClicked}/>}
        </div>
    )
}

export default Row
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './mainMovie.css'

function MainMovie({fetchURL, baseURL}) {
    const [movie, setMovie] = useState([])

    useEffect(() => {
        axios.get(`${baseURL}${fetchURL}`)
            .then(response => {
                const rand = Math.floor(Math.random() * response.data.results.length - 1)
                setMovie(response.data.results[rand])
                console.log(response.data.results[rand])
            })
    }, []) 
    return (
        <header className="mainMovie"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: "center center",
                height: "700px"
            }}
        >
            <div className="dark"></div>
            <div className="content">
                <h1>{movie?.original_name || movie?.title || movie?.name}</h1>
                <div className="contentButtons">
                    <button className="contentButton play">Play</button>
                    <button className="contentButton myList">My list</button>
                </div>
                <div className="description">
                    <p>
                        {movie.overview}
                    </p>
                </div>
            </div>
        </header>
    );
}

export default MainMovie
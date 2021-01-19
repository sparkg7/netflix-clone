import React, {useState, useEffect} from 'react'
import './moviePopup.css'

function MoviePopup({clickedMovie, setIsClicked}) {
    return (
        <div className="popup">
            <div className="movieInfo">
                <div className="movieContent">
                    <h1>{clickedMovie?.original_name || clickedMovie?.title || clickedMovie?.name}</h1>
                    <div className="contentButtons">
                        <button className="contentButton play">Play</button>
                        <button className="contentButton myList">My list</button>
                    </div>
                    <div className="movieDesc">
                        <p>
                            {clickedMovie.overview}
                        </p>
                    </div>
                </div>
            </div>
            <div className="movieImage"
                style={{
                    backgroundSize: "cover",
                    backgroundImage: `url("https://image.tmdb.org/t/p/original/${clickedMovie?.backdrop_path}")`,
                    backgroundPosition: "center center"
                }}
            >
                <div 
                    className="closePopup"
                    onClick={() => setIsClicked(false)}
                >
                    <i class="fas fa-times"></i>
                </div>
                <div className="shadow"></div>
            </div>
        </div>
    )
}

export default MoviePopup
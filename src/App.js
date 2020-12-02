import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {

    const [movieState, setMovieState] = useState({
        title: '',
        movie: {}
    })

    movieState.handleInputChange = event => {
        setMovieState({ ...movieState, [event.target.name]: event.target.value })
    }

    movieState.handleSearchMovie = event => {
        event.preventDefault()
        axios.get(`http://www.omdbapi.com/?apikey=e86daa15&t=${movieState.title}`)
            .then(({ data }) => {
                setMovieState({ ...movieState, movie: data })
            })
    }

    // Kind of like a default. We want page load with this
    useEffect(() => {
        axios.get('http://www.omdbapi.com/?apikey=e86daa15&t=Goodfellas')
            .then(({ data }) => {
                setMovieState({ ...movieState, movie: data })
            })
    }, [])

    return (
        <>
            <form>
                <p>
                    <label htmlFor="title">title</label>
                    <input
                        type="text"
                        name="title"
                        value={movieState.title}
                        onChange={movieState.handleInputChange} />
                </p>
                <p>
                    <button onClick={movieState.handleSearchMovie}>Search Movie</button>
                </p>
            </form>
            <div className="card" style={{ width: '18rem' }}>
                <img src={movieState.movie.Poster} className="card-img-top" alt={movieState.movie.Title} />
                <div className="card-body">
                    {/* The title and plot are capitalized here because of the way omdb has them */}
                    <h5 className="card-title">{movieState.movie.Title}</h5>
                    <p className="card-text">{movieState.movie.Plot}</p>
                </div>
            </div>
        </>
    )
}

export default App
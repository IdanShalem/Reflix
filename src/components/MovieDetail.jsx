import React, { Component } from 'react';
import '../styles/MovieDetail.css'

class MovieDetail extends Component {
    render() {
        const movieId = this.props.match.params.movieId
        const movie = this.props.movies.find(m => m.id == movieId)
        return (
            <div className="movie-detail">
                <h1>{movie.title} ({movie.year})</h1>
                <img className="movie-detail-img" src={movie.img} alt=""/>
                <p>{movie.descrShort}</p>
            </div>
        );
    }
}

export default MovieDetail;
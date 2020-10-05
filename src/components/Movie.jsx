import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import '../styles/Movie.css'

class Movie extends Component {

    handleRent = () => {
        this.props.handleRent(this.props.user, this.props.movie)
    }

    handleRemove = (e) => {
        this.props.handleRemove(this.props.user, e.target.id)
    }

    render() {
        const movie = this.props.movie
        return (
            
                <div className="movie-card">
                    <Link to={`/movies/${movie.id}`}>
                        <img className="movie-card-img" src={movie.img} alt=""/>
                    </Link>
                    {this.props.rented 
                        ? <p id={movie.id} onClick={this.handleRemove}>REMOVE</p>
                        : <p id={movie.id} onClick={this.handleRent}>RENT</p>}
                    
                </div>
            
        );
    }
}

export default Movie;
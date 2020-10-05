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
                {this.props.rented 
                    ? <i id={movie.id} onClick={this.handleRemove} class="fa fa-minus-circle"></i>
                    : <i id={movie.id} onClick={this.handleRent} class="fa fa-plus-circle"></i>}  
                <Link to={`/movies/${movie.id}`} style={{textDecoration: "none"}}>  
                    <img className="movie-card-img" src={movie.img} alt=""/>
                </Link>
            </div>
        );
    }
}

export default Movie;
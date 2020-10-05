import React, { Component, Fragment } from 'react';
import Movie from './Movie'
import '../styles/Catalog.css'

class Catalog extends Component {

    renderMovies = (user, movies, isRented) => {
        return movies.map(m => 
            <Movie key={m.id} movie={m} 
            user={user.name} rented={isRented} 
            handleRent={this.props.handleRent}
            handleRemove={this.props.handleRemove}/>)
    }

    render() {
        const userName = this.props.match.params.userName
        const user = this.props.users.find(u => u.name === userName)
        return (
            <Fragment>
                <div className="user-info">
                    <h4>{userName}</h4>
                    <h4>{user.budget}</h4>
                </div>
                {user.rentedMovies.length > 0
                    ?   <div>
                            <h3>Rented:</h3>
                            <div className="movies-container">
                                {this.renderMovies(user, user.rentedMovies, true)}
                            </div>
                        </div>
                    :   null}
                <div>
                    <h3>Catalog:</h3>
                    <div className="movies-container">
                        {this.renderMovies(user, this.props.movies, false)}
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Catalog;
import React, { Component, Fragment } from 'react';
import Movie from './Movie'
import {Redirect} from 'react-router-dom'
import '../styles/Catalog.css'

class Catalog extends Component {

    constructor(){
        super()
        this.state = {
            inputValue: ''
        }
    }

    movieComponent = (user, movie, isRented) => {
        return <Movie key={movie.id} movie={movie} 
                user={user.name} rented={isRented} 
                handleRent={this.props.handleRent}
                handleRemove={this.props.handleRemove}/>
    }
    
    renderMovies = (user, movies, isRented) => {
        return movies.map(m => { 
            if(this.state.inputValue.length > 0){
                if(m.title.toLowerCase().includes(this.state.inputValue.toLowerCase())){
                    return this.movieComponent(user, m, isRented)
                }
            } else {
                return this.movieComponent(user, m, isRented)
            }
        })
    }

    handleInputChange = (e) => {
        this.setState({
          inputValue: e.target.value
        })
      }

    render() {
        if(!this.props.currentUser){ 
            return <Redirect to="/" />
        }

        const userName = this.props.match.params.userName
        const user = this.props.users.find(u => u.name === userName)
        return (
            <div id='catalog-container'>
                <div id='catalog-header'>
                    <input id="input_search" placeholder="Search..." value={this.state.inputValue} onChange={this.handleInputChange}/>
                    <div className="user-info">
                        <img id="user-info-avatar" src={user.avatar} alt=""/>
                        <h4>{userName},</h4>
                        <h4>Budget: {user.budget}.00$</h4>
                    </div>
                </div>
                {user.rentedMovies.length > 0
                    ?   <div class="movies">
                            <h3>Rented:</h3>
                            <div className="movies-container">
                                {this.renderMovies(user, user.rentedMovies, true)}
                            </div>
                        </div>
                    :   null
                }
                <div class="movies">
                    <h3>Catalog:</h3>
                    <div className="movies-container" >
                        {this.renderMovies(user, this.props.movies, false)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Catalog;
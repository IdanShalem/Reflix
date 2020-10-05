import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Landing.css'

class Landing extends Component {

    userEntered = (e) => {
        this.props.userEntered(e.target.id)
    } 

    render() {
        return (
            <div id="landing-content">
                <h1>WHO'S WATCHING?</h1>
                <div id="users-content">
                    {this.props.users.map(u => {return (
                        <Link to={`/catalog/${u.name}`}>
                            <div className="user-card" id={u.name} onClick={this.userEntered} style={{backgroundImage: "url(" + u.avatar + ")"}}>
                                <span className="user-card-name">{u.name}</span>
                            </div>
                        </Link>
                    )}
                    )}
                </div>
            </div>
    );
  }
}

export default Landing;
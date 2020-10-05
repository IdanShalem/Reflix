import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component {

    userEntered = (e) => {
        this.props.userEntered(e.target.id)
    } 

    render() {
        return (
            <div>
                {this.props.users.map(u => <Link to={`/catalog/${u.name}`} id={u.name} onClick={this.userEntered}>{u.name}</Link>)}
            </div>
    );
  }
}

export default Landing;
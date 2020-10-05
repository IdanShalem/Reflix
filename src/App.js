import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom'
import Landing from './components/Landing'
import Catalog from './components/Catalog'
import MovieDetail from './components/MovieDetail'
import logo from './HatchfulExport-All/logo_transparent.png'

class App extends Component {

  constructor(){
    super()
    this.state= {
      movies: [
            { id: 0, title: "Tarzan", year: 1999, img: "https://vignette.wikia.nocookie.net/disney-fan-fiction/images/4/42/Tarzan_2004_cover.jpg/revision/latest?cb=20140331030811", descrShort: "Tarzan was born into wealth but raised into incredible misfortune. Shiprweck, parents mauled by a jaguar. Luckily, a troop of gorillas took him in, but the Big Daddy gorilla never took a liking to him. That is, until the end when it's too late. Why is it too late? Watch and find out." },
            { id: 1, title: "The Lion King", img: "https://img00.deviantart.net/b782/i/2006/207/e/7/the_lion_king_front_cd_cover_by_peachpocket285.jpg", year: 1994, descrShort: "A young lion prince named Simba is born into wealth but raised into incredible misfortune. Trickster uncle, dying father, usurpation. Luckily, an unlikely meerkat-warthog pair take him in and teach him The Ways of the Bum Life. Be prepared for ghostly hallucinations, wild baboons, creepy crawlies." },
            { id: 2, title: "Beauty and the Beast", year: 1991, img: "https://images-na.ssl-images-amazon.com/images/I/81etFyb9N-L._SL1500_.jpg", descrShort: "A kickass woman named Belle who does not succumb to social norms gets crap from a bunch of village idiots, chief amongst them a total tool named Gaston. Belle shows everyone how great she is when she turns a beast (not Gaston) into a man. Love ensues, but then the villagers fall trap to severe group-think mentality led by the main tool himself." },
            { id: 3, title: "The Sword in the Stone", year: 1963, img: "https://www.disneyinfo.nl/images/laserdiscs/229-1-AS-front.jpg", descrShort: "Arthur is a young boy who just wants to be a knight's squire. Alas, he is dubbed 'Wart' early on, and it was all downhill from there for a while. On a hunting trip he falls in on Merlin, literally. Merlin is a possibly-mentally-unstable-and-ethically-dubious Wizard that turns Arthur into a literate, at-one-point harassed squirrel. Watch to find out what the heck that means." },
            { id: 4, title: "Beauty and the Beast", year: 2016, img: "https://images-na.ssl-images-amazon.com/images/I/51ArFYSFGJL.jpg", descrShort: "Basically the same as the original, except now Hermi-- Emma Wattson plays Belle, fittingly so some would say, given how actively progressive she is regarding women's rights. Rumor has it that in the bonus scenes she whips out a wand and turns Gaston into a toad, but in order to watch those scenes you need to recite a certain incantation." }
      ],
      users: [
          {id: 1, name: 'Idan', avatar:'https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png', budget: 10, rentedMovies:[]},
          {id: 2, name: 'Coral', avatar:'https://i.pinimg.com/originals/34/62/d2/3462d27440aa255b1c314ff16f4032b4.png', budget: 10, rentedMovies:[]},
          {id: 3, name: 'Cohen', avatar:'https://mir-s3-cdn-cf.behance.net/project_modules/disp/bf6e4a33850498.56ba69ac3064f.png', budget: 10, rentedMovies:[]}
      ],
      currentUser: undefined
    }
  }

  userEntered = (userName) => {
    this.setState({currentUser: userName})
  }

  handleRent = (userName, movie) => {
    const users = [...this.state.users]
    const user = users.find(u => u.name === userName)
    if(user.budget >= 3)
    {
      if(!user.rentedMovies.find(m => m.id === movie.id)){
        user.rentedMovies.push(movie)
        user.budget -= 3
        this.setState({
          users
        })
      } else{
        alert('This movie is already in the renting list. Try another one.')
      }
    } else {
      alert('Not enough budget for renting this movie. Please remove movies from renting list.')
    }
  }

  handleRemove = (userName, movieId) => {
    const users = [...this.state.users]
    const user = users.find(u => u.name === userName)
    const movieIndex = user.rentedMovies.findIndex(m => m.id == movieId)
    user.rentedMovies.splice(movieIndex, 1)
    user.budget += 3
    this.setState({
      users
    })
  }

  handleRedirect = () => {
    
  }

  render() {
      return (
      <Router>
        <div className="App">
          <div id='header'>
            <div id='links'>
              <Link className='main-links' to="/"><span>Home</span></Link>
              <Link className='main-links' to={`/catalog/${this.state.currentUser}`}><span>Catalog</span></Link>
            </div>
            <img id="logo" src={logo}/>
          </div>
          <Route path="/" exact render={() => <Landing users={this.state.users} userEntered={this.userEntered}/>} />
          <Route path="/catalog/:userName" 
            exact render={({match}) => <Catalog 
              match={match} 
              movies={this.state.movies}
              users={this.state.users}
              handleRent={this.handleRent}
              handleRemove={this.handleRemove}
              currentUser={this.state.currentUser}/>} />
          <Route path="/movies/:movieId" exact render={({ match }) => <MovieDetail match={match} movies={this.state.movies}/>}/>
        </div>
      </Router>
      );
  }
}

export default App;

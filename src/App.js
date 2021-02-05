import React, { Component } from 'react';
import AddGame from './AddGame';
import GamesLibrary from './GamesLibrary'
import MyGamesLog from './MyGamesLog';
import * as GamesAPI from './utils/GamesAPI'
import { Route } from 'react-router-dom';
  class App extends Component{
  state = {
    display: 'log',
    games: []
  }
  componentDidMount(){
    GamesAPI.getAll()
        .then((games)=>{
          this.setState(() => ({
            games
          }))
        })
  }
  createContact = (game) => {
    GamesAPI.create(game)
      .then((game)=>{
        this.setState((currentState) => ({
          games: currentState.games.concat([game])
        }))
      })
  }

  removeContact = (game) => {
    this.setState((currentState)=>({
      games: currentState.games.filter((c) => {
        return c.id !== game.id
      })
    }))
    GamesAPI.remove(game)
  }

  switchState = (clone,game) => {
    this.createContact(clone)
    this.removeContact(game)
  }

  /* CALLING METHODS */
  //1. Method that Changes the Game Status
  //not used anymore, but still useful for reference
  /* when updating an array in the state, call the whole array
  gameStatusChanger = (ID, status) => {
    let gamesArray = this.state.games.slice()
    for (const game of gamesArray){
      if (game.id === ID){
        game.status = status
      }
    }
    this.setState({games: gamesArray})
  }
  */

  onNavigateChange = (display) => {
    this.setState({ display })
  }
  
   render (){
    return(
      <div>
        <Route exact path='/' render={() => (
          <MyGamesLog
            mygames = {this.state.games}
            onNavigate = {()=> this.onNavigateChange('all')}
            onDeleteContact={this.removeContact}
            onSwitch = {this.switchState}
          />
        )} />
        <Route path='/search' render={()=> (
          <GamesLibrary
            allgames = {this.state.games}
            onNavigate = {()=>this.onNavigateChange('log')}
            display={this.state.display}
            onSwitch = {this.switchState}
            onRemove = {this.removeContact}
          />
        )}/>

        

        {this.state.display === 'add' &&(
                   <AddGame
          display={this.state.display}
        />
        )}
      </div>
    );
  }
}

export default App;

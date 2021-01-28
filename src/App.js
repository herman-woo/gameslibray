import React, { Component } from 'react';
import AddGame from './AddGame';
import GamesLibrary from './GamesLibrary'
import MyGamesLog from './MyGamesLog';

  class App extends Component{
  state = {
    display: 'log',
    games: [
      { 
        name: 'Titanfall 2',
        id: 'titanfall2',
        dev: 'Respawn Entertainment',
        platform: 'ps4',
        status: 'waitlist',
        time: '00:00hrs',
        imageURL: 'https://upload.wikimedia.org/wikipedia/en/1/13/Titanfall_2.jpg'
      },
      { name: 'Death Stranding',
        id: 'deathstranding',
        dev: 'Kojima Productions',
        platform: 'ps4',
        status: 'none',
        time: '00:00hrs',
        imageURL: 'https://upload.wikimedia.org/wikipedia/en/2/22/Death_Stranding.jpg'
      },
      { 
        name: 'Persona 5',
        id: 'p5',
        dev: 'Atlas Games',
        platform: 'ps4',
        status: 'none',
        time: '00:00hrs',
        imageURL: 'https://upload.wikimedia.org/wikipedia/en/b/b0/Persona_5_cover_art.jpg'
      },
      { 
        name: 'Ghosts of Tsushima',
        id: 'ghostsoftsushima',
        dev: 'Sucker Punch Studios',
        platform: 'ps4',
        status: 'waitlist',
        time: '00:00hrs',
        imageURL: 'https://upload.wikimedia.org/wikipedia/en/b/b6/Ghost_of_Tsushima.jpg'
      },
      { 
        name: 'Assassins Creed: Valhalla',
        id: 'valhalla',
        dev: 'Ubisoft',
        platform: 'ps4',
        status: 'playing',
        time: '66:37hrs',
        imageURL: 'https://upload.wikimedia.org/wikipedia/en/f/f8/ACValhalla.jpg'
      },
      { 
        name: 'God of War',
        id: 'godofwar',
        dev: 'Santa Monica Studios',
        platform: 'ps4',
        status: 'none',
        time: '00:00hrs',
        imageURL: 'https://upload.wikimedia.org/wikipedia/en/a/a7/God_of_War_4_cover.jpg'
      },
      { 
        name: 'Spider-Man',
        id: 'spiderman',
        dev: 'ROCKSTEADY Studios',
        platform: 'ps4',
        status: 'playing',
        time: '22:10hrs',
        imageURL: 'https://upload.wikimedia.org/wikipedia/en/e/e1/Spider-Man_PS4_cover.jpg'
      },
      { 
        name: 'Final Fantasy VII ReMake',
        id: 'ffviiremake',
        dev: 'Square Enix',
        platform: 'ps4',
        status: 'none',
        time: '00:00hrs',
        imageURL: 'https://upload.wikimedia.org/wikipedia/en/c/ce/FFVIIRemake.png'
      },
      { 
        name: 'Metal Gear Solid V: The Phantom Pain',
        id: 'mgsv',
        dev: 'Kojima Productions',
        platform: 'ps4',
        status: 'none',
        time: '00:00hrs',
        imageURL: 'https://upload.wikimedia.org/wikipedia/en/8/8f/Metal_Gear_Solid_V_The_Phantom_Pain_cover.png'
      },
      { 
        name: 'Kingdom Hearts III',
        id: 'kingdomhearts3',
        dev: 'Square Enix',
        platform: 'ps4',
        status: 'none',
        time: '00:00hrs',
        imageURL: 'https://upload.wikimedia.org/wikipedia/en/5/5c/Kingdom_Hearts_III_box_art.jpg'
      },
      { name: 'kingdom Hearts 1.5 + 2.5',
        id: 'kingdomhearts1525',
        dev: 'Square Enix',
        platform: 'ps4',
        status: 'none',
        time: '00:00hrs',
        imageURL: 'https://images-na.ssl-images-amazon.com/images/I/61XnoC5N4uL.jpg'
      },
      { 
        name: 'Call of Duty: Modern Warfare',
        id: 'ModernWarfare2019',
        dev: 'Infinity Ward',
        platform: 'ps4',
        status: 'none',
        time: '00:00hrs',
        imageURL: 'https://upload.wikimedia.org/wikipedia/en/e/e9/CallofDutyModernWarfare%282019%29.jpg'
      },
      { 
        name: 'Assassins Creed: Origins',
        id: 'acorigins',
        dev: 'Ubisoft',
        platform: 'ps4',
        status: 'completed',
        time: '00:00hrs',
        imageURL: 'https://upload.wikimedia.org/wikipedia/en/4/4a/Assassin%27s_Creed_Origins_Cover_Art.png'
      },
      { 
        name: 'Assassins Creed: Odyssey',
        id: 'acodyssey',
        dev: 'Ubisoft',
        platform: 'ps4',
        status: 'none',
        time: '00:00hrs',
        imageURL: 'https://upload.wikimedia.org/wikipedia/en/9/99/ACOdysseyCoverArt.png'
      },
      { 
        name: 'Persona 4 Golden',
        id: 'persona4golden',
        dev: 'Santa Monica Studios',
        platform: 'PS Vita',
        status: 'none',
        time: '00:00hrs',
        imageURL: 'https://images-na.ssl-images-amazon.com/images/I/81QFr0nkQNL._SL1494_.jpg'
      },
      { 
        name: 'Bioshock The Collection',
        id: 'bioshock',
        dev: 'ROCKSTEADY Studios',
        platform: 'ps4',
        status: 'none',
        time: '00:00hrs',
        imageURL: 'https://upload.wikimedia.org/wikipedia/en/e/e7/BioShock-_The_Collection.jpg'
      },
      { 
        name: 'Jedi: Fallen Order',
        id: 'jedifallenorder',
        dev: 'Respawn Entertainment',
        platform: 'ps4',
        status: 'waitlist',
        time: '00:00hrs',
        imageURL: 'https://upload.wikimedia.org/wikipedia/en/1/13/Cover_art_of_Star_Wars_Jedi_Fallen_Order.jpg'
      },
      { 
        name: 'The Witcher 3: Wild Hunt',
        id: 'witcher3',
        dev: 'CD Projekt Red',
        platform: 'ps4',
        status: 'completed',
        time: '00:00hrs',
        imageURL: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg'
      }
    ]
  }

  /* CALLING METHODS */
  //1. Method that Changes the Game Status
  gameStatusChanger = (ID, status) => {
    let gamesArray = this.state.games.slice()
    for (const game of gamesArray){
      if (game.id === ID){
        game.status = status
      }
    }
    this.setState({games: gamesArray})
  }

  onNavigateChange = (display) => {
    this.setState({ display })
  }
  //TODO
   render (){
    return(
      <div>
         {this.state.display === 'log' &&(
        <MyGamesLog
          mygames = {this.state.games}
          onNavigate = {()=> this.onNavigateChange('all')}
          onStatusChange = {this.gameStatusChanger}
        />
        )}
        {this.state.display === 'all' &&(          
        <GamesLibrary
          allgames = {this.state.games}
          onNavigate = {()=>this.onNavigateChange('log')}
          display={this.state.display}
          onStatusChange = {this.gameStatusChanger}
        />

        )}
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

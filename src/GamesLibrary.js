import React, { Component } from 'react';

class GamesLibrary extends Component {
    render(){
    const { onNavigate, onStatusChange } = this.props
      return(
      <div className='games-lib'>
        <div className='lib-header'>
          <h1 className='active-games-title'> Search</h1>
          <button
            className='lib-button'
            onClick= {onNavigate}
          >
              View Active Games
          </button>
        </div>
        <div className='games-lib'>
          <ul className='search-list'>
            {this.props.allgames.map((game)=>(
              <li className= {game.status === 'none'? 'search-item' : (game.status === 'playing'? 'current-item search-item' : (game.status === 'completed'? 'completed-item search-item' : 'waitlisted-item search-item'))}
                key={game.id}
                style={{backgroundImage: `url(${game.imageURL})`}
              }>
              {game.status === 'none' &&  
                <button
                    onClick={()=> {onStatusChange(game.id,'playing')}}
                    >play
                </button>}
                {game.status === 'none' &&  
                <button
                    onClick={()=> {onStatusChange(game.id,'waitlist')}}
                    >wait
                </button>}
                {game.status === 'none' &&  
                <button
                    onClick={()=> {onStatusChange(game.id,'completed')}}
                    >done
                </button>}
                
               
                {game.status === 'waitlist' &&  
                <button
                    onClick={()=> {onStatusChange(game.id,'playing')}}
                    >play
                </button>
                }
                {game.status === 'waitlist' &&  
                <button
                    className='remove button'
                    onClick={()=> {onStatusChange(game.id,'none')}}
                    >remove
                </button>
                }
                {game.status === 'waitlist' &&  
                <button
                    onClick={()=> {onStatusChange(game.id,'completed')}}
                    >done
                </button>
                }      
              {game.status === 'playing' &&  
                <button
                    className='remove button'
                    onClick={()=> {onStatusChange(game.id,'none')}}
                    >remove
                </button>             
              }
              {game.status === 'playing' &&  
                <button
                    onClick={()=> {onStatusChange(game.id,'waitlist')}}
                    >wait
                </button>             
              }
              {game.status === 'playing' &&  
                <button
                    onClick={()=> {onStatusChange(game.id,'completed')}}
                    >done
                </button>             
              }
              {game.status === 'completed' &&  
                <button
                    onClick={()=> {onStatusChange(game.id,'none')}}
                    >remove
                </button>             
              }
              {game.status === 'completed' &&  
                <button
                    onClick={()=> {onStatusChange(game.id,'waitlist')}}
                    >wait
                </button>             
              }
              {game.status === 'completed' &&  
                <button
                    onClick={()=> {onStatusChange(game.id,'playing')}}
                    >play
                </button>             
              }

              </li>
            ))}
          </ul>
        </div>
      </div>
      );
    }
  }

  export default GamesLibrary
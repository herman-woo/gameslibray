import React, { Component } from 'react'

class SearchItem extends Component{

    render(){
    const { game, myClone, onRemove } = this.props
        return(
        <div className='search-item'
            key={game.id}
            style={{backgroundImage: `url(${game.imageURL})`}}
        >
            <div className='search-item-game-info'>
                  <h1>{`${game.name}`}</h1>
                  <h3>{`2019`}</h3>
                  <h3>{`${game.dev}`}</h3>
            </div>
            <div className='search-item-user-info'>

                  <h2>{`Status: ${game.status}`}</h2>
                  <div className='search-item-panel'>
                    {game.status === 'none' &&  
                      <button className='play button'
                      onClick={()=> {myClone(game,'playing')}}
                      >play
                      </button>}
                    {game.status === 'none' &&  
                    <button className='pause button'
                    onClick={()=> {myClone(game,'waitlist')}}
                      >wait
                    </button>
                    }
                    {game.status === 'none' &&  
                    <button className='check button'
                    onClick={()=> {myClone(game,'completed')}}
                      >done
                    </button>
                    }
                    {game.status === 'waitlist' &&  
                    <button className='play button'
                    onClick={()=> {myClone(game,'playing')}}
                      >play
                    </button>
                    } 
                    {game.status === 'waitlist' &&  
                        <button className='check button'
                        onClick={()=> {myClone(game,'completed')}}
                        >done
                    </button>
                    }      
                    {game.status === 'playing' &&  
                    <button className='pause button'
                        onClick={()=> {myClone(game,'waitlist')}}
                        >wait
                    </button>             
                    }
                    {game.status === 'playing' &&  
                    <button className='check button'
                    onClick={()=> {myClone(game,'completed')}}
                        >done
                    </button>             
                    }
                    {game.status === 'completed' &&  
                    <button className='pause button'
                    onClick={()=> {myClone(game,'waitlist')}}
                        >wait
                    </button>             
                    }
                    {game.status === 'completed' &&  
                    <button className='play button'
                    onClick={()=> {myClone(game,'playing')}}
                        >play
                    </button>             
                    }                
                    <button 
                            onClick={() => onRemove(game)}
                    >DELETE
                    </button> 

                  </div>
            </div>
        </div>

        )
    }
}

export default SearchItem
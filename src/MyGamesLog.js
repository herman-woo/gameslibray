import React, { Component } from 'react';

class MyGamesLog extends Component {
    render(){
      const { onNavigate, onStatusChange, mygames } = this.props
      return(
        <div className='games-log'>
          <div className='log-header'>
          <h1 className='app-title'>
            My GamesLog
          </h1>
            <button onClick={onNavigate}> Add </button>
          </div>
          <div className='log-list'>
             <div >
                <h2 >Currently Playing</h2>
                <ul className='games-list'>
                  {mygames.map((game)=>(
                  game.status === 'playing' &&
                  (<li className='current-item game'
                    key={game.id}
                    style={{backgroundImage: `url(${game.imageURL})`}}
                    >
                    <div className='game-top-section'>
                      <button
                        className='remove button'
                        onClick={()=> {onStatusChange(game.id,'none')}}
                        >
                      </button>
                    </div>
                    <div className='game-section-bottom'>
                      <div>
                        <button
                          className='pause button' 
                          onClick={()=> {onStatusChange(game.id,'waitlist')}}
                          >wait
                        </button>
                        <button
                          className='check button' 
                          onClick={()=> {onStatusChange(game.id,'completed')}}
                          >finshed!
                        </button>
                      </div>
                    </div>
                    </li>)
                  ))}
                </ul>
              </div>
            <div>
              <h2 >Waitlisted</h2>
              <ul className='games-list'>
                {mygames.map((game)=>(
                  game.status === 'waitlist' &&
                  (<li className='waitlisted-item game'
                    key={game.id}
                    style={{backgroundImage: `url(${game.imageURL})`}
                  }>                    
                    <div className='game-top-section'>
                      <button
                        className='remove button'
                        onClick={()=> {onStatusChange(game.id,'none')}}
                        >
                      </button>
                    </div>
                    <div className='game-section-bottom'>

                      <button
                        className='play button'
                        onClick={()=> {onStatusChange(game.id,'playing')}}
                        >
                      </button>
                      <button
                        className='check button' 
                        onClick={()=> {onStatusChange(game.id,'completed')}}
                        >finshed!
                      </button>
                    </div>
                  </li>)
                ))}
              </ul>
            </div>
            <div className='completed-section'>
              <h2>Completed</h2>
              <ul className='games-list'>
                {mygames.map((game)=>(
                  game.status === 'completed' &&
                  (<li className='completed-item game'
                    key={game.id}
                    style={{backgroundImage: `url(${game.imageURL})`}
                  }>
                    <div className='game-top-section'>
                      <button
                        className='remove button'
                        onClick={()=> {onStatusChange(game.id,'none')}}
                        >
                      </button>
                    </div>
                    <div className='game-section-bottom'>
                      <div>
                      <button
                          className='play button' 
                          onClick={()=> {onStatusChange(game.id,'playing')}}
                          >play
                        </button>
                        <button
                          className='pause button' 
                          onClick={()=> {onStatusChange(game.id,'waitlist')}}
                          >wait
                        </button>
                      </div>
                    </div>
                  </li>)
                ))}
              </ul>
            </div>
          </div>
         
        </div>

      );
    }
  }

export default MyGamesLog
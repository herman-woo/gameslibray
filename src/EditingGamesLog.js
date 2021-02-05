import React, { Component } from 'react';
import EditItem from './EditItem'
 class EditingGamesLog extends Component{
    render(){
        const { games, clone } = this.props
        return(
            <div className='log-list'>
                <EditItem
                    title='Edit Active'
                    status='playing'
                    games= {games}
                    clone={clone}
                />
                <EditItem
                    title='Edit WaitList'
                    status='waitlist'
                    games= {games}
                    clone={clone}
                />
                <EditItem
                    title='Edit Completed'
                    status='completed'
                    games= {games}
                    clone={clone}
                />
            </div>
        )
    }

 }

 export default EditingGamesLog


 /*
                    <div className='game-section-bottom'>
                      <div>
                        <button
                          className='pause button' 
                          onClick={()=> {myClone(game,'waitlist')}}
                          >wait
                        </button>
                        <button
                          className='check button' 
                          onClick={()=> {myClone(game,'completed')}}
                          >finshed!
                        </button>
                      </div>
                    </div>
                    </li>)
                  ))}
                  <div onClick={onNavigate}> 
                    <li className='current-item game blank'>
                      <p>+</p>
                    </li>
                  </div>
                  
                </ol>
                </div>
                
              </div>          
            <div>
              <h2 className='status-title'>Waitlisted</h2>
              <div className='games-list-section'> 
              <ol className='games-list'>
              
                {mygames.map((game)=>(
                  game.status === 'waitlist' &&
                  (<li className='waitlisted-item game edit'
                    key={game.id}
                    style={{backgroundImage: `url(${game.imageURL})`}
                  }>                    
                    <div className='game-top-section'>
                      <button
                        className='remove button'
                        onClick={()=> {myClone(game,'none')}}
                        >
                      </button>
                    </div>
                    <div className='game-section-bottom'>

                      <button
                        className='play button'
                        onClick={()=> {myClone(game,'playing')}}
                        >
                      </button>
                      <button
                        className='check button' 
                        onClick={()=> {myClone(game,'completed')}}
                        >finshed!
                      </button>
                    </div>
                  </li>)
                ))}
                  <Link
                    to='/search'
                    
                  > 
                    <li className='current-item game blank'>
                    +
                    </li>
                  </Link> 
              </ol>
              </div>
            </div>
            <div className='completed-section'>
              <h2 className='status-title'>Completed</h2>
              <ul className='games-list'>
                {mygames.map((game)=>(
                  game.status === 'completed' &&
                  (<li className='completed-item game edit'
                    key={game.id}
                    style={{backgroundImage: `url(${game.imageURL})`}
                  }>
                    <div className='game-top-section'>
                      <button
                        className='remove button'
                        onClick={()=> {myClone(game,'none')}}
                        >
                      </button>
                    </div>
                    <div className='game-section-bottom'>
                      <div>
                      <button
                          className='play button' 
                          onClick={()=> {myClone(game,'playing')}}
                          >play
                        </button>
                        <button
                          className='pause button' 
                          onClick={()=> {myClone(game,'waitlist')}}
                          >wait
                        </button>
                      </div>
                    </div>
                  </li>)
                ))}
                <div onClick={onNavigate}> 
                  <li className='current-item game blank'>
                    <p>+</p>
                  </li>
                  </div>
              </ul>
            </div>
 */
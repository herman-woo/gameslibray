import React, { Component } from 'react';
import { Link } from "react-router-dom";
class EditItem extends Component{
    render(){
    const {title,games,status,clone} = this.props
        return(
        <div>
            <h2 className='status-title'>{title}</h2>
            <div className='games-list-section'>
            <ol className='games-list'>
            {games.map((game)=> (
                game.status === status && (
                <li className='current-item game edit'
                    key={game.id}
                    style={{backgroundImage: `url(${game.imageURL})`}}
                >
                    <div className='game-top-section'>
                      <button
                        className='remove button'
                        onClick={()=> {clone(game,'none')}}
                        >
                      </button>
                    </div>
                    <div className='game-section-bottom'>
                        <div>
                        {status !== 'playing' && <button
                            className='play button' 
                            onClick={()=> {clone(game,'playing')}}
                            >wait
                        </button>}
                        {status !== 'waitlist' &&
                        <button
                          className='pause button' 
                          onClick={()=> {clone(game,'waitlist')}}
                          >wait
                        </button>}
                        {status !== 'completed' &&
                        <button
                          className='check button' 
                          onClick={()=> {clone(game,'completed')}}
                          >finshed!
                        </button>}

                      </div>                      
                    </div>
                </li>)
            ))}
                <Link to='/search'> 
                    <li className='current-item game blank'>
                        <p>+</p>
                    </li>
                </Link>  
            </ol>
            </div>
        </div>
            
        )
    }
}

export default EditItem
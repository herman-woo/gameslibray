import React, { Component } from 'react'

class SavedItem extends Component{
render(){
    const { games, sectionClass, title, listClass, gameStatus } = this.props
    return(
        <div className={sectionClass}>
            <h2 className='status-title'>{title}</h2>
            <div className='games-list-section'>
                <ol className='games-list'>
                    {games.map((game)=>
                        game.status === gameStatus &&
                        (<li className={listClass}
                                key={game.id}
                                style={{backgroundImage: `url(${game.imageURL})`}}>
                                <a className='game-item-info'
                                href = {game.imageURL}
                                >
                                    <div className='game-item-info-top'>
                                        <div className='game-item-name'>
                                            <h2>
                                                {`${game.name}`} 
                                            </h2>
                                            <h4>
                                                {`${game.dev}`}
                                            </h4>   
                                        </div>
                                        <h3 className='game-item-system'>
                                            {`${game.platform}`}
                                        </h3>   
                                    </div>
                                    <div className='game-item-info-bottom'>
                                        <h3>
                                            {`Rating: ${game.rating}`}
                                        </h3>  
                                        <h3>
                                            {`Completion: ${game.score}`}
                                        </h3>    
                                        <h2>
                                            {`MyTime: ${game.time}`}
                                        </h2>                            
                                    </div> 
                                </a>    
                        </li>)
                        )}
                </ol>
            </div>
        </div>
    )
}

}

export default SavedItem
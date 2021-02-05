import React, { Component } from 'react';
import SavedItem from './SavedItem'


class SavedGamesLog extends Component{
 render(){
     const { games } = this.props
     return(
    <div className='log-list'>
        <SavedItem 
            games={games}
            title='Currently Active'
            listClass='current-item game'
            gameStatus='playing'
            />
        <SavedItem 
            games={games}
            title='Waitlisted'
            listClass='current-item game'
            gameStatus='waitlist'
            />
        <SavedItem 
            games={games}
            sectionClass='completed-section'
            title='Completed Games'
            listClass='current-item game'
            gameStatus='completed'
            />
    </div>
     );
 }    
}

export default SavedGamesLog
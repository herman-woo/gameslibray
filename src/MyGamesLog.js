import React, { Component } from 'react';
import SavedGamesLog from './SavedGamesLog';
import EditingGamesLog from './EditingGamesLog'
import { Link } from 'react-router-dom'
class MyGamesLog extends Component {
  state = {
    edit: 'save'
  }

  editor = (editValue) => {
    this.setState({edit: editValue})
  }


    render(){
      const { onNavigate, mygames, onSwitch } = this.props
      const myClone = (game, status) => {
        let target = {}
        const clone = Object.assign(target, game)
        //clone.id = `${game.id}2`
        clone.status = status
        onSwitch(clone,game)
      }  
      return(
        <div className='games-log'>
          <div className='app-header'>
            <div className='app-title'>
              <h1>Games Log</h1>
              <p>1.00</p>
            </div>
            <div className='app-dashbaord'>
            {this.state.edit === 'edit' &&(
              <button
              className='save button'
              onClick = {() => this.editor('save')}>
                  Save</button>)}
              {this.state.edit === 'save' &&(
              <button
              className='pen button'
              onClick = {() => this.editor('edit')}>
                  Edit</button>)}
              <Link
                to='/search'>
                  <button className='magnifying-glass button'>
                    Search Games
                  </button>
              </Link>
            </div>
          </div>
          {this.state.edit === 'save' &&(
            <SavedGamesLog 
              games = {mygames}
              clone = {myClone}
            />
          )}
          {this.state.edit === 'edit' &&(
            <EditingGamesLog 
              games = {mygames}
              clone = {myClone}
            />
          )}
        </div>

      );
    }
  }

export default MyGamesLog
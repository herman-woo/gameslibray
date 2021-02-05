import React, { Component } from 'react';
import SearchItem from "./SearchItem";
import { Link } from "react-router-dom";
class GamesLibrary extends Component {
  state = {
    search: ''
  }  
  updateQuery = (search) => {
    this.setState(() => (
        {
          search: search
        }
      )
    )
  }

  clearSearch = () => {
    this.updateQuery('')
  }

  render(){
    const { search } = this.state
    const { allgames, onNavigate, onSwitch, onRemove } = this.props
    const resultsArray = search === ''
    ? ''
    : allgames.filter((g) => (
      g.name.toLowerCase().includes(search.toLowerCase())
    ))
    const results = resultsArray
    const myClone = (game, status) => {
      let target = {}
      const clone = Object.assign(target, game)
      clone.status = status
      onSwitch(clone,game)
    }  

      return(
      <div className='search'>
        <div className='search-header'>
          <input
            className='search-games-input'
            type='text'
            placeholder='Search Games'
            value={search}
            onChange={(event)=> this.updateQuery(event.target.value)}
          ></input>
          <div className='results-title'>           
            {search === ''
            ? <h1>Search the Library</h1>
            : <h2>{`${resultsArray.length} search ${resultsArray.length === 1
              ? 'result'
              : 'results'} for '${search}'`}</h2>}
            {search!== '' &&(
              <button className='clear button'
              onClick={this.clearSearch}>
                Clear Search
              </button>
            )}      
            
            </div>
        </div>
        <div className='search-results'>          
          <ol className='search-list'>
            {results !== '' && (
              results.map((game)=>(
                <li
                  key={`${game.id}List`}>
                  <SearchItem
                    game= {game}
                    myClone = {myClone}
                    onRemove = {onRemove} 
                  />
                </li>)))
            }
          </ol>
        </div>
        <div className='search-footer'>
          <Link
            to='/'
          >
            <button
                className='back button'
                onClick= {onNavigate}
            >
            </button>
          </Link>
          
          <h2>Return</h2>
        </div>
      </div>
      );
    }
  }

  export default GamesLibrary
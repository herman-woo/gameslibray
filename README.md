# GamesLog App
This is my submission for the first project of my REACT course from Udacity. The front-end is custom and was started from scratch via create-react-app. 

## Application Setup
Application requires npm install and npm start to be launched

## Main Functionality
This app helps users manage their own backlog of games.
There are 2 pages to this app:
1. Home Page
2. Search Page


### Main Page - Active State (default state)
The home page of this app allows a user to see games under three different states, represented in 3 'shelves'. They are the following:
1. "Currently Acitive" 
2. "Waitlisted"
3. "Completed"

In this state of the app, users cannot move games between 'shelves', this can only be done in edit state

### Main Page - Edit State
In the top right corner, the user can enter into the edit state of the home page by clicking the pen icon. This allows users to switch games between shelves. Each game will have buttons that direct the games to be put on different shelves, or removed from the current list entirely. 

The buttons will switch depending on which shelf the game is on

'Blank' games will also appear on each shelf in this state, clicking on any of them will direct the user to the search page.

Users can save the state of their games by clicking the check-box in the top right corner where the pen icon was in the active state.

When the page is refreshed, the page will go back to the active state, and the changes will remain.

### Search Page
This page can be accessed through the magnifying glass icon in the top right corner, or through 'Blank' games that appear on each shelf while in edit state.

#### Search Bar
Here the user may type in the name of a desired game into the text field at the top of the page and results will appear below

#### Serach Results
If the search input matches the names of any games in the current data, the results will appear.

Results will show information on the game, as well as the current status of the game. Users can change the status of the game from these results as well and the status will appear on the home page

The user can also delete game entries here

#### Return Button
Directs user back to home page


## Server
This app receives data from an API hosted on heroku, it is a customized version of the server provided in the Udacity React Lessons.


## Developer's Note
Heroku's apps will go to sleep when not used for a period of time, but I keep it opened and active while this project is in review state
import React, {useState} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import MainScreen from './components/MainScreen'
import PlayerScreen from './components/PlayerScreen'
import './styles.css'

function App() {
  const [players, setPlayers] = useState([])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [winner, setWinner] = useState(null)

  const addPlayer = name => {
    setPlayers(prevPlayers => [...prevPlayers, name])
  }

  const handleCorrectAnswer = name => {
    setWinner(name)
    setTimeout(() => {
      setWinner(null)
      setCurrentQuestion(prev => prev + 1)
    }, 2000)
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MainScreen
            players={players}
            currentQuestion={currentQuestion}
            winner={winner}
          />
        </Route>
        <Route path="/player">
          <PlayerScreen
            currentQuestion={currentQuestion}
            addPlayer={addPlayer}
            handleCorrectAnswer={handleCorrectAnswer}
          />
        </Route>
      </Switch>
    </Router>
  )
}

export default App

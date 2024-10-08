import React, {useState} from 'react'
import Question from './Question'
import {questions} from '../data'

function PlayerScreen({currentQuestion, addPlayer, handleCorrectAnswer}) {
  const [name, setName] = useState('')
  const [answer, setAnswer] = useState('')
  const [joined, setJoined] = useState(false)

  const handleJoin = () => {
    if (name) {
      addPlayer(name)
      setJoined(true)
    }
  }

  const handleAnswerSubmit = () => {
    const correctAnswer = questions[currentQuestion].answer
    if (answer === correctAnswer) {
      alert('Congratulations, ${name}! Your answer is correct.')
      handleCorrectAnswer(name)
    } else {
      alert('Incorrect answer. Try again!')
    }
  }

  const handleOptionClick = selectedAnswer => {
    setAnswer(selectedAnswer)
  }

  return (
    <div className="player-screen">
      {!joined ? (
        <div>
          <h2>Enter your name to join:</h2>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <button onClick={handleJoin}>Join</button>
        </div>
      ) : (
        <div>
          <Question
            questionData={questions[currentQuestion]}
            handleOptionClick={handleOptionClick}
            isPlayer={true}
          />
          <button onClick={handleAnswerSubmit}>Submit Answer</button>
        </div>
      )}
    </div>
  )
}

export default PlayerScreen

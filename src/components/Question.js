import React from 'react'

function Question({questionData, handleOptionClick, isPlayer = false}) {
  const {question, options} = questionData

  return (
    <div className="question">
      <h2>{question}</h2>
      <ul className="options">
        {options.map((option, index) => (
          <li key={index}>
            <button
              onClick={() => handleOptionClick(option[0])}
              className={isPlayer ? 'player-option' : ''}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Question

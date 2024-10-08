import QRCode from 'react-qr-code'
import Question from './Question'
import {questions} from '../data'

function MainScreen({players, currentQuestion, winner}) {
  const question = questions[currentQuestion]

  return (
    <div className="main-screen">
      <h1>KBC Game</h1>

      {winner ? (
        <h2>Congratulations {winner}!</h2>
      ) : (
        <Question questionData={question} handleOptionClick={() => {}} />
      )}

      <div className="qr-code-container">
        <QRCode value="http://localhost:3000/player" size={200} />
        <p>Scan to join</p>
      </div>

      <div className="players-container">
        <h3>Players:</h3>
        <ul>
          {players.map((player, index) => (
            <li key={index}>{player}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default MainScreen

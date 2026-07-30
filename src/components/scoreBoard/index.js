import './index.css'

const ScoreBoard = ({score, playAgain}) => (
  <div className="score-board-container">
    <img
      className="trophy"
      src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
      alt="trophy"
    />

    <p className="score-text">YOUR SCORE</p>

    <h1 className="score">{score}</h1>

    <button type="button" className="play-again-btn" onClick={playAgain}>
      <img
        className="reset-icon"
        src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
        alt="reset"
      />
      PLAY AGAIN
    </button>
  </div>
)

export default ScoreBoard

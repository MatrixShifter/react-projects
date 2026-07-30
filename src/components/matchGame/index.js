import './index.css'
import {useState, useEffect} from 'react'
import TabItems from '../tabItems'
import Gallery from '../Gallery'
import DisplayImg from '../DisplayImg'
import ScoreBoard from '../scoreBoard'

const MatchGame = ({tabsList, imagesList}) => {
  const [activeId, setActiveId] = useState(tabsList[0].tabId)
  const [currentImage, setCurrentImage] = useState(imagesList[0])
  const [score, setScore] = useState(0)
  const [timer, setTimer] = useState(60)
  const [isGameOver, setIsGameOver] = useState(false)

  useEffect(() => {
    if (isGameOver) {
      return undefined
    }

    const intervalId = setInterval(() => {
      setTimer(prev => {
        if (prev === 1) {
          clearInterval(intervalId)
          setIsGameOver(true)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(intervalId)
  }, [isGameOver])

  const updateActiveId = tabId => {
    setActiveId(tabId)
  }
  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * imagesList.length)
    setCurrentImage(imagesList[randomIndex])
  }

  const onClickThumbnail = id => {
    if (id === currentImage.id) {
      setScore(prevScore => prevScore + 1)
    }

    getRandomImage()
  }

  const playAgain = () => {
    setScore(0)
    setTimer(60)
    setCurrentImage(imagesList[0])
    setActiveId(tabsList[0].tabId)
    setIsGameOver(false)
  }

  return (
    <div className="container">
      <nav>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="website-logo"
        />

        <ul className="nav-items">
          <li className="score-item">
            <p>
              Score: <span>{score}</span>
            </p>
          </li>

          <li className="timer-item">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              alt="timer"
              className="timer-icon"
            />
            <p>{timer} Sec</p>
          </li>
        </ul>
      </nav>

      {isGameOver ? (
        <div className="sub-container">
          <ScoreBoard score={score} playAgain={playAgain} />
        </div>
      ) : (
        <div className="sub-container">
          <DisplayImg displayImg={currentImage} />

          <TabItems
            tabsList={tabsList}
            activeId={activeId}
            updateActiveId={updateActiveId}
          />

          <Gallery
            imagesList={imagesList}
            activeId={activeId}
            getRandomImage={onClickThumbnail}
          />
        </div>
      )}
    </div>
  )
}

export default MatchGame

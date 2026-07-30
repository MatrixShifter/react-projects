import './index.css'

const DisplayImg = ({displayImg}) => (
  <div className="display-image-container">
    <img src={displayImg.imageUrl} alt="match" className="display-image" />
  </div>
)

export default DisplayImg

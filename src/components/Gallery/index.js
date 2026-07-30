import './index.css'

const Gallery = ({imagesList, activeId, getRandomImage}) => {
  const filteredImages = imagesList.filter(
    eachImage => eachImage.category === activeId,
  )

  return (
    <ul className="gallery">
      {filteredImages.map(eachImage => (
        <li key={eachImage.id} className="gallery-item">
          <button
            type="button"
            className="thumbnail-btn"
            onClick={() => getRandomImage(eachImage.id)}
          >
            <img
              src={eachImage.thumbnailUrl}
              alt="thumbnail"
              className="thumbnail-image"
            />
          </button>
        </li>
      ))}
    </ul>
  )
}

export default Gallery

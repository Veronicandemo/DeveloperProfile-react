import React, { useRef, useState, useCallback } from 'react'
const images = [
  { id: 1, photoName: 'image-product-1-thumbnail.jpg' },
  { id: 2, photoName: 'image-product-2-thumbnail.jpg' },
  { id: 3, photoName: 'image-product-3-thumbnail.jpg' },
  { id: 4, photoName: 'image-product-4-thumbnail.jpg' },
  // { id: 5, photoName: 'image-product-4-thumbnail.jpg' },
  // { id: 6, photoName: 'image-product-2-thumbnail.jpg' },
]

const Images = () => {
  const [imageSrc, setImageSrc] = useState('image-product-1-thumbnail.jpg')
  const imageContainer = useRef()
  function setImageActive() {
    imageContainer.current.querySelectorAll('img').forEach((img) => {
      img.classList.remove('image-active')

      if (img.src === 'http://localhost:3002/' + imageSrc) {
        console.log(imageSrc)
        console.log(img)
        img.classList.add('image-active')
      }
    })
  }
  function imageSetHandler(img) {
    setImageSrc(img)
    setImageActive()
  }

  return (
    <div className="images">
      <img src={imageSrc} className="main-img" />
      <div ref={imageContainer} className="display-imgs">
        {images.map((item) => (
          //   <div>
          <img
            onClick={imageSetHandler.bind(this, item.photoName)}
            src={item.photoName}
            key={item.id}
            alt="photo of shoe"
          />
          //   </div>
        ))}
      </div>
    </div>
  )
}

export default Images

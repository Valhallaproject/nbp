import React from 'react'
import Card from '../common/card/Card'
import "./Gallery.css"

function Gallery() {
  return (
    <div className="gallery">
      <h2>GALLERY</h2>
      <div className="cards">
        <Card />
      </div>
    </div>
  )
}

export default Gallery
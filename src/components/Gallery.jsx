import React from 'react'
import Data from '../data/logements.json'
import Card from './Card'

const Gallery = () => {
    return (
        <div className="gallery">
            {Data.map((item) => {
                return (
                    <Card id={item.id} cover={item.cover} title={item.title} />
                )
            })}
        </div>
    )
}

export default Gallery

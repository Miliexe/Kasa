import React from 'react'
import Data from '../data/logements.json'
import { Link } from 'react-router-dom'

const Gallery = () => {
    return (
        <div className="gallery">
            {Data.map((item) => {
                return (
                    <Link
                        to={`/product/${item.id}`}
                        className="gallery__card"
                        key={item.id}
                    >
                        <img src={item.cover} alt={item.title} />
                        <h3 className="card__title">{item.title}</h3>
                    </Link>
                )
            })}
        </div>
    )
}

export default Gallery

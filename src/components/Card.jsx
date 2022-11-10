import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ id, cover, title }) => {
    return (
        <div>
            <Link to={`/product/${id}`} className="gallery__card" key={id}>
                <img src={cover} alt={title} />
                <h3 className="card__title">{title}</h3>
            </Link>
        </div>
    )
}

export default Card

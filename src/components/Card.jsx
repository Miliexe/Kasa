import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ id, cover, title }) => {
    return (
        <Link to={`/product/${id}`} className="card">
            <img className="card__img" src={cover} alt={title} />
            <h3 className="card__title">{title}</h3>
        </Link>
    )
}

export default Card

import React from 'react'

const Banner = ({ img, txt }) => {
    return (
        <div className="banner">
            <img className="banner__image" alt="banner" src={img} />
            <h1 className="banner__title">{txt}</h1>
        </div>
    )
}

export default Banner

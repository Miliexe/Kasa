import React from 'react'

const Banner = ({ img, txt }) => {
    return (
        <div className="home_banner">
            <img className="home_banner__image" alt="home banner" src={img} />
            <h1 className="home_banner__title">{txt}</h1>
        </div>
    )
}

export default Banner

import React from 'react'

const Host = ({ name, picture }) => {
    return (
        <div className="host">
            <div className="host__name">{name}</div>
            <img className="host__picture" src={picture} alt="host profil" />
        </div>
    )
}

export default Host

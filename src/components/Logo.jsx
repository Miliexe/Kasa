import React from 'react'
import logo from '../asset/logo.png'

const Logo = () => {
    return (
        <div>
            <img
                className="logo--mobile logo--desktop"
                src={logo}
                alt="logo Kasa"
            />
        </div>
    )
}

export default Logo

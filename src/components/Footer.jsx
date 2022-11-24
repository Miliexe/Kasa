import React from 'react'
import LogoWhite from './LogoWhite'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__logo">
                <LogoWhite />
            </div>
            <p className="footer__license">© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer

import React from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import img1 from '../asset/carrousel.png'

const buttonStyle = {
    background: 'none',
    border: '0px',
    padding: '0px 25px',
}

const proprietes = {
    duration: 10000,
    transitionDuration: 1000,
    infinite: true,
    indicators: true,
    arrow: true,
    prevArrow: (
        <button style={{ ...buttonStyle }}>
            <svg
                width="48"
                height="80"
                viewBox="0 0 48 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z"
                    fill="white"
                />
            </svg>
        </button>
    ),
    nextArrow: (
        <button style={{ ...buttonStyle }}>
            <svg
                width="48"
                height="80"
                viewBox="0 0 48 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z"
                    fill="white"
                />
            </svg>
        </button>
    ),
}

const Slideshow = () => {
    return (
        <div className="slideshow">
            <Slide {...proprietes}>
                <div className="slide">
                    <div>
                        <img src={img1} alt="img1" />
                    </div>
                </div>
                <div className="slide">
                    <div>
                        <img src={img1} alt="img1" />
                    </div>
                </div>
                <div className="slide">
                    <div>
                        <img src={img1} alt="img1" />
                    </div>
                </div>
            </Slide>
        </div>
    )
}

export default Slideshow

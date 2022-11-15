import React, { useState } from 'react'

const Slideshow = (props) => {
    let [displayedImg, setDisplayedImg] = useState(0)

    const next = () => {
        setDisplayedImg((displayedImg = displayedImg + 1))

        if (displayedImg + 1 > props.img.length) {
            setDisplayedImg(0)
        }
    }

    const previous = () => {
        setDisplayedImg((displayedImg = displayedImg - 1))

        if (displayedImg < 0) {
            setDisplayedImg(props.img.length - 1)
            return
        }
    }

    return (
        <div className="slideshow">
            <button className="button button--left" onClick={previous}>
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
            <button className="button button--right" onClick={next}>
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

            <div className="slide">
                <img
                    src={props.img && props.img[displayedImg]}
                    alt={props.title}
                />
            </div>

            <span className="indicators">
                {displayedImg ? displayedImg + 1 : 1}/
                {props.img && props.img.length}
            </span>
        </div>
    )
}

export default Slideshow

import React from 'react'
import Gallery from '../components/Gallery'
import HomeBanner from '../components/HomeBanner'

const Home = () => {
    return (
        <div className="home">
            <HomeBanner />
            <Gallery />
        </div>
    )
}

export default Home

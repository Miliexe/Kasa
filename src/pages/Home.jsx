import React from 'react'
import Gallery from '../components/Gallery'
import Banner from '../components/Banner'
import Image from '../asset/home__banner.png'

const Home = () => {
    return (
        <div className="home">
            <Banner
                img={Image}
                txt="Chez vous,
                partout et ailleurs"
            />
            <Gallery />
        </div>
    )
}

export default Home

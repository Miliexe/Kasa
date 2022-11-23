import Banner from '../components/Banner'
import Collapse from '../components/Collapse'
import Image from '../asset/about__banner.png'
import Data from '../data/about.json'

function About() {
    return (
        <div className="about">
            <Banner img={Image} />
            <div className="collapses">
                {Data.map((item) => {
                    return (
                        <Collapse
                            title={item.title}
                            content={item.content}
                            key={item.id}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default About

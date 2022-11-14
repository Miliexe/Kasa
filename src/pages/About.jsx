import Banner from '../components/Banner'
import Collapse from '../components/Collapse'
import Image from '../asset/about__banner.png'

function About() {
    return (
        <div>
            <Banner img={Image} />
            <Collapse />
        </div>
    )
}

export default About

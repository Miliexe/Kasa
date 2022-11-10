import Banner from '../components/Banner'
import Collapse from '../components/Collapse'
import Image from '../asset/about__banner.png'

function About() {
    return (
        <div>
            <Banner img={Image} />
            <Collapse
                title="Fiabilité"
                content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
            />
        </div>
    )
}

export default About

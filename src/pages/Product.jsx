import Slideshow from '../components/Slideshow'
import Data from '../data/logements.json'
import { useParams, Navigate } from 'react-router-dom'
import Collapse from '../components/Collapse'
import Host from '../components/Host'
import Stars from '../components/Stars'

function Product() {
    const { id } = useParams()
    const display = Data.filter((item) => item.id === id)[0]

    if (!display) {
        return <Navigate to="/Error404" />
    }

    return (
        <div className="product">
            <Slideshow img={display.pictures} />
            <div className="infos">
                <h1 className="product__title">{display.title}</h1>
                <h2 className="product__location">{display.location}</h2>
                <ul className="tags">
                    {display.tags.map((tag) => {
                        return (
                            <li className="tag" key={tag}>
                                {tag}
                            </li>
                        )
                    })}
                </ul>
                <Stars rating={display.rating} />
                <Host name={display.host.name} picture={display.host.picture} />
            </div>
            <div className="collapses">
                <Collapse title="Description" content={display.description} />
                <Collapse title="Equipement" content={display.equipments} />
            </div>
        </div>
    )
}

export default Product

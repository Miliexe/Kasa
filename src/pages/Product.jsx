import Slideshow from '../components/Slideshow'
import Data from '../data/logements.json'
import { useParams, Navigate } from 'react-router-dom'
import Collapse from '../components/Collapse'

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
                <div className="collapses">
                    <Collapse
                        title="Description"
                        content={display.description}
                    />
                    <Collapse title="Equipement" content={display.equipments} />
                </div>
            </div>
        </div>
    )
}

export default Product

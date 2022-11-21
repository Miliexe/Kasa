import Slideshow from '../components/Slideshow'
import Data from '../data/logements.json'
import { useParams, Navigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

function Product() {
    const [product, setProduct] = useState(Data)

    const { id } = useParams()

    useEffect(() => {
    const display = Data.filter((item) => item.id === id)[0]

    if (!display) {
        return <Navigate to="/Error404" />
    }

    return (
        <div className="product">
            <Slideshow img={display.pictures} />
        </div>
    )
}

export default Product

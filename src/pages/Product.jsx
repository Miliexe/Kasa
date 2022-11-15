import Slideshow from '../components/Slideshow'
import Data from '../data/logements.json'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Product() {
    const [product, setProduct] = useState(Data)

    const { id } = useParams()

    useEffect(() => {
        const display = Data.filter((item) => item.id === id)[0]
        setProduct(display)
    }, [id])

    return (
        <div className="product">
            <Slideshow img={product.pictures} />
        </div>
    )
}

export default Product

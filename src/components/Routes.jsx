import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'

import Home from '../pages/Home'
import About from '../pages/About'
import Error404 from '../pages/Error404'
import Product from '../pages/Product'

const index = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/*" element={<Error404 />} />
                <Route path="/product/:id" element={<Product />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default index

import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import About from './pages/About'
import Error404 from './pages/Error404'
import Product from './pages/Product'

import './styles/index.css'

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/*" element={<Error404 />} />
                <Route path="/product/:id" element={<Product />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App

import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Error404 from './pages/Error404'
import Product from './pages/Product'

import './styles/index.css'

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/*" element={<Error404 />} />
                <Route path="/product/:id" element={<Product />} />
            </Routes>
        </div>
    )
}

export default App

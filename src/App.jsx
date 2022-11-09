import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'

import Home from './pages/Home'
import About from './pages/About'
import Error404 from './pages/Error404'
import Product from './pages/Product'

import './styles/index.css'

function App() {
    return (
        <div className="App">
            <header>
                <Header />
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/*" element={<Error404 />} />
                <Route path="/product/:id" element={<Product />} />
            </Routes>
            <footer></footer>
        </div>
    )
}

export default App

import { Routes, Route } from 'react-router-dom'


import Home from './pages/Home.jsx';
import Survey from './pages/Survey.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey" element={<Survey />} />
            </Routes>
    </div>
  );
}

export default App;

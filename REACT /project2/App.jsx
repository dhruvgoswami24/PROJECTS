import './App.css';
import Home from './Components/Home';
import Products from './Components/Products';
import Service from './Components/Service';
import About from './Components/About';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>APP</h1>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Service />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;

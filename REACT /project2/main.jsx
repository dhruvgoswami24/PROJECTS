
import App from './App.jsx'
import Navbar from './Components/Navbar.jsx'
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';


createRoot(document.getElementById('root')).render(
 <BrowserRouter>
     <Navbar/>
    <App />
    </BrowserRouter>

);

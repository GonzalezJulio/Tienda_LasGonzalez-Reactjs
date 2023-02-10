import './App.css';
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EffectExample from './components/EffectExample';
import { useState, createContext } from 'react'
import { CartProvider } from './Context/CartContext';
import { NotificationProvider } from './notification/NotificationCart';
import { ToastContainer } from 'react-toastify';
import AppRouter from './routes/AppRoutes';


function App() {
  
  const [show, setShow] = useState(true)
  return ( 
    <div className="App"> 
      <NotificationProvider>
        <CartProvider>
          <BrowserRouter>
            <Navbar />
            <ToastContainer />
            <AppRouter/>
          </BrowserRouter>
        </CartProvider>
      </NotificationProvider>
        
    </div>
  );
}

export default App;


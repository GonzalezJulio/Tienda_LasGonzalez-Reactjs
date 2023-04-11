import './App.css';
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter} from 'react-router-dom'


import { CartProvider } from './Context/CartContext';
import { NotificationProvider } from './notification/NotificationCart';
import { ToastContainer } from 'react-toastify';
import AppRouter from './routes/AppRoutes';
import Footer from './components/Footer/footer';


function App() {
  
  
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
        <Footer/>
      </NotificationProvider>
        
    </div>
  );
}

export default App;

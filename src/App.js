
import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import CardProducts from './components/CardProducts/CardProducts.js';
import ShoppingCard from './components/ShoppingCard/ShoppingCard.js'

function App () {
  return (
    <body>
      <header>
        <div className="App">
          <Navbar />
          <ItemListContainer greeting = 'Bienvenidos a Nuestro Shop'/>
          
        </div>
      </header>
      <div>
          <CardProducts />
      </div>
      <div>
        <ShoppingCard/>
      </div>
      

    </body>
    
    
    
    
    
  );
}

export default App;

import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js'



function App () {
  return (
    
    
      <div className="App">
        <Navbar />
        <ItemListContainer greeting = 'Bienvenidos a Nuestro Shop'/>
      </div>
    
    
  );
}

export default App;
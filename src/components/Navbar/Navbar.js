import CartWidget from "../CartWidget/CartWidget"

const Navbar = () => {
    return (
        <nav>
            <div classname='headsup'>
                <img className="logolasgonzalez" src='./assest/img/lasgonzalez_tienda.png' />
                
            </div>
            <div className="headinf">
                <div>
                <button>Quienes Somos</button>
                <button>Como Comprar</button>
                <button>Productos</button>
                <button>Contactos</button>

                </div> 
                <div>
                <CartWidget />
                
                </div>           
            </div>
            
        </nav>
    )
} 

export default Navbar
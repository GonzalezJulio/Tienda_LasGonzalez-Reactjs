import CartWidget from "../CartWidget/CartWidget"

const Navbar = () => {
    return (
        <nav>
            <div classname='headsup'>
                <img className="logolasgonzalez" src='./assest/img/lasgonzalez_tienda.png' />
                
            </div>
            <div className="headinf">
                <div>
                <button className="botones">Quienes Somos</button>
                <button className="botones">Como Comprar</button>
                <button className="botones">Productos</button>
                <button className="botones">Contactos</button>

                </div> 
                <div>
                <CartWidget />
                
                </div>           
            </div>
            
        </nav>
    )
} 

export default Navbar
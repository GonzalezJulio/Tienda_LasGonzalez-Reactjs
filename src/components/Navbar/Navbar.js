import CartWidget from "../CartWidget/CartWidget"


const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg">
                    <div classname='headsup'>
                      <img className="logolasgonzalez" src='./assest/img/lasgonzalez_tienda.png' />

                    </div>
                    <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                  <a class="nav-link active" href="">Como Comprar</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="">Productos</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" href="">Contactos</a>
                                </li>
                                <li>
                                    <a class="nav-link active" href="">Compras</a>
                                </li>
                                
                                
                            </ul>
                            <div>
                              <CartWidget />
                
                            </div>
                        </div>
                    </div>
                </nav>
    )
} 

export default Navbar
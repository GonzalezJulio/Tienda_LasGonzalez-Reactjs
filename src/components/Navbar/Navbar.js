import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'

const NavBar = () => {

  const navigate = useNavigate()
  const { totalQuantity } = useContext(CartContext)

  return (
    <nav className="NavBar" >
          <h3 onClick={() => navigate('/')}><img src="../assest/img/lasgonzalez_tienda.png" className="logo"/></h3>
        <div className="Categories">
          <NavLink to={`/category/Vasos`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Vasos</NavLink>
          <NavLink to={`/category/Varios`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Varios</NavLink>
          <NavLink to={`/category/Set Mate`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Set Materos</NavLink>
        </div>
        <CartWidget quantity={totalQuantity}/>
    </nav>
  )
}

export default NavBar
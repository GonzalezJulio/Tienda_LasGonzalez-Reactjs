import { NavLink, Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'


import { useNavigate } from 'react-router-dom'

const NavBar = () => {

  const navigate = useNavigate()

  return (
    <nav className="NavBar" >
          <h3 onClick={() => navigate('/')}><img src="../assest/img/lasgonzalez_tienda.png" className="logo"/></h3>
        <div className="Categories">
          <NavLink to={`/category/Vasos`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Vasos</NavLink>
          <NavLink to={`/category/Varios`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Varios</NavLink>
          <NavLink to={`/category/Set Mate`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Set Materos</NavLink>
        </div>
        <CartWidget />
    </nav>
  )
}

export default NavBar
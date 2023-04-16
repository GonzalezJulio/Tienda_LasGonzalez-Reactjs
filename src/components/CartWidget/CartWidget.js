import './CartWidget.css'
import cart from './assest/cart.svg'
import { Link } from 'react-router-dom'

const CartWidget = ({ totalQuantity }) => {
    return(
        <Link to='/cart' className="CartWidget">
            <img src={cart} alt='cart-widget' className='CartImg'/>
            { totalQuantity }
        </Link>
    );
}

export default CartWidget



import './CartWidget.css'

import { Link } from 'react-router-dom'

const CartWidget = ({ quantity }) => {
    return(
        <Link to='/cart' className="CartWidget">
            <img src="../assest/img/cart.svg" alt='cart-widget' className='CartImg'/>
            { quantity }
        </Link>
    );
}

export default CartWidget




import ItemCart from "../ItemCart/ItemCart"
import { Link } from "react-router-dom"
const CartList = ({ cart }) => {
    return (
        <div>
            <div>
            {
                cart.map(prod => <ItemCart key={prod.id} {...prod}/>)
            }
            </div>
            <Link to='/checkout'>Checkout</Link>
        </div>
    )
}

export default CartList
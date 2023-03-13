import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom"
import { DistributeVertical } from "react-bootstrap-icons";

const CartCointeiner = () => {
    const { cart } = useContext(CartContext)
    console.log(cart)
    return(
        <div>
            <h1>cart</h1>
            <div>
                {
                    cart.map(prod =>{
                        return (
                            <h2 key={prod.id}>{prod.name}</h2>
                        )
                    })
                }
            </div>
            <Link to="/checkout">Checkout</Link>
        </div>
    )
}

export default CartCointeiner
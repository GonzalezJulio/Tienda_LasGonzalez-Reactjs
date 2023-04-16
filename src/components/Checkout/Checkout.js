import { collection, query, where, documentId, getDocs, writeBatch, addDoc } from "firebase/firestore"
import { useContext, useState } from "react"
import { CartContext } from "../../Context/CartContext"
import { db } from "../../Service/Firebase/firebaseConfig"
import { Link } from "react-router-dom"

import { useNavigate } from "react-router-dom"

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')
    const { cart, total, clearCart } = useContext(CartContext)
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [email2, setEmail2] = useState('')
     

    const navigate = useNavigate()

    const createOrder = async () => {
        setLoading(true)
        try {
            const objOrder = {
                buyer: {
                    name,
                    phone,
                    email
                },
                items: cart,
                total
            }
    
            const batch = writeBatch(db)
    
            const ids = cart.map(prod => prod.id)
            console.log(ids)
    
            const productsRef = query(collection(db, 'products'), where(documentId(), 'in', ids))
    
            // getDocs(productsRef).then(productsAddedToCartFromFirestore => {
    
            // })
    
            const productsAddedToCartFromFirestore = await getDocs(productsRef)
            const { docs } = productsAddedToCartFromFirestore
    
            const outOfStock = []
    
            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
    
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart.quantity
    
                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })
    
            if(outOfStock.length === 0) {
                await batch.commit()
    
                const orderRef = collection(db, 'orders')
    
                const orderAdded = await addDoc(orderRef, objOrder)
    
                const { id } = orderAdded
                setOrderId(id)

                clearCart()

                setTimeout(() => {
                    navigate('/')
                }, 5000)

                console.log(id)
            } else {
                console.error('hay productos fuera de stock')
            }
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
       
        
    }

    if(loading) {
        return <h1>Generando orden...</h1>
    }

    if(orderId) {
        return (
            <div className="container">
                <h4 style={{ color: "black", marginTop: "60px", marginBottom: "60px" }}>{name}, tu compra fue realizada con éxito!</h4>
                <div className="card item-detail-card" style={{ color: "#9da5d2" }}>
                    <div className="card-body item-detail-body">
                        <h5 className="card-title" style={{ color: "black" }}>Tu número de compra es: {orderId}</h5>
                    </div>
                </div>
                <div>
                    <h5 style={{ color: 'black', marginTop: '40px' }}>En breve recibirás un e-mail con los pasos a seguir</h5>
                    <Link to='/'><p style={{ fontSize: '20px', marginTop: '90px', color: 'black', textDecoration: 'none' }} >Volver al inicio</p></Link>
                </div>
            </div>
        )
    }

    if(cart.length === 0) {
        return (
            <h1>No hay productos en el carrito</h1>
        )
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === '' || email === '' || phone === '' || email2 === '') {
            console.log('error', `Todos los campos deben estar completos para finalizar su compra`, 5);
        } else if (email !== email2) {
            console.log('error', `Los mails no coinciden`, 5);
        } else {
            createOrder();
        }
    };

    return (
        <div>
            <h4 className="title-pag" style={{ color: "black", marginTop: "50px", marginBottom: "70px", fontSize: '35px' }}>Completá tus datos y confirmá la compra</h4>
            <div className="container">
                <form className="FormularioOrden">
                    <div className="form-group">
                        <input type="text" className="form-control" value={name} placeholder="Nombre y Apellido" onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <br />
                    <div className="form-group">
                        <input type="number" className="form-control " value={phone} placeholder="Teléfono" onChange={(e) => setPhone(e.target.value)} required />
                    </div>
                    <br />
                    <div className="form-group">
                        <input type="email" className="form-control" value={email} placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <br />
                    <div className="form-group">
                        <input type="email" className="form-control" value={email2} placeholder="Repetir E-mail" onChange={(e) => setEmail2(e.target.value)} required />
                    </div>
                    <br />
                    <button onClick={handleSubmit} type="submit" className="ButtonGenerarOrden">Generar orden</button>
                </form>
            </div>
        </div>
    )
}

export default Checkout
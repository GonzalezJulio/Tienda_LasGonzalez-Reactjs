import { useState, createContext } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [ cart, setCart] = useState([])
        
    const addItem = (productToAdd) => {
        
        if(!isInCart(productToAdd.id)) {
          setCart(prev => {
            console.log(prev)
            return [...prev, productToAdd]
    
          })
        } else {
          console.error('YA ESTA AGREGADO')
        }
    }
    
    const isInCart = (id) => cart.some(prod => prod.id === id)
    const removeItem = (id) => {
      const cartUpdated = cart.filter(prod => prod.id !== id)
      setCart(cartUpdated)
    }
    const getTotalQuantity = () => {
      let accu = 0

      cart.forEach(prod => {
        accu += prod.quantity
      })
      
      return accu
    }

    const getTotal = () => {
      let total = 0
      cart.forEach(prod => {
        total += prod.quantity * prod.price
      })
      
      return total
    }
    const totalQuantity = getTotalQuantity()

    const total = getTotal()
    
    return(
        <CartContext.Provider value={{ cart, addItem, isInCart, totalQuantity, removeItem, total }}>
            { children }
        </CartContext.Provider>
    
    )
}

import './ItemCount.css'
import { useState } from 'react'

const ItemCount = ({stock = 0, initial = 1, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)
    const increment = () => {
        if(quantity < stock) {
            setQuantity (prev => prev + 1)
        }
    }

    const decrement = () => {
        if()
    }
}
import { useEffect } from "react"

const ItemListContainer = () => {

    useEffect() => {
        getProducts()
            .then(products =>{
                setProducts(products)
            })
            .catch(error =>{
                console.log(error)
            })
    }
    return (
        <div>
            <h1>{greeting}</h1>
        </div>
    )
}

export default ItemListContainer
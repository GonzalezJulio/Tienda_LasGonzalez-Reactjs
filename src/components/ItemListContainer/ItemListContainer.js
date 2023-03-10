import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory} from "../../asyncMock"
import ItemList from '../ItemList/ItemList'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { useParams } from 'react-router-dom'
import { db } from '../../Service/Firebase/firebaseConfig'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        const onResize = (event) => {
            console.log(event)
            
        }

        const onResize2 = () => {
            console.log('otra cosa')
        }

        window.addEventListener('resize', onResize)
        window.addEventListener('resize', onResize2)

        return () => {
            window.removeEventListener('resize', onResize) 
            window.removeEventListener('resize', onResize2)
        }
    }, [])

    useEffect(() => {
        document.title = 'Todos los productos'
    }, [])

    useEffect(() => {
        setLoading(true)
        
        const collectionRef = categoryId
        ? query(collection(db, 'products'),where('category', '==', categoryId) )
        : collection(db, 'products')
        
        getDocs(collectionRef).then(response => {
            console.log(response)
            const productsAdapted = response.docs.map(doc => {
                const data = doc.data()
                console.log(doc.id)
                console.log(data)
                return { id: doc.id, ...data}
            })
            setProducts(productsAdapted)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })

        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId).then(response => {
            setProducts(response)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })  
    }, [categoryId])


    if(loading) {
        return <h1>Cargando productos...</h1>
    }

    return (
        <div className='ItemListContainer' onClick={() => console.log('hice click en itemlistcontainer')}>
            
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer
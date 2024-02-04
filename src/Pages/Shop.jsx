import { useEffect, useState } from "react"
import axios from 'axios'
import { Product } from "../components/Product"


function Shop() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const getProducts = async () => {
            const res = await axios.get('https://js2-ecommerce-api.vercel.app/api/products')
            setProducts(res.data)
        }
        getProducts()

    }, [])

  return (
    <div>
        <h1 className="home-title">
        Våra Produkter
      </h1>


    <div className="shop">

        {products.map(product => (
            <Product key={product._id} product={product} />

            

        ))
    
    }
        
    </div>

    </div>
  )
}
export default Shop
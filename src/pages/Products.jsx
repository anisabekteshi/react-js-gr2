import React from 'react'
import { Link } from 'react-router-dom'

function Products() {
    const products =[
        {
            id:1,
            productName: "iphone 14"
        },
         {
            id:2,
            productName: "iphone 15"
        },
         {
            id:3,
            productName: "iphone 16"
        }
    ]
  return (
    <div>
        {
            products.map(product => (
                <Link to={`/products/${product.id}`}>{product.productName}</Link>
            ))
        }
    </div>
  )
}

export default Products
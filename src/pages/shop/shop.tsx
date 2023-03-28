import React from 'react'
import { Products } from '../../Products'
import Product from './product'
import './shop.css'
function Shop() {
  return (
    <div className='shop'>
        <div className="shopTitle">
            <h1>Shopify</h1>
        </div>
        <div className="products">
          {Products.map((prod)=>(
            <Product data={prod}/>
          ))}
        </div>
    </div>
  )
}

export default Shop
import { Button } from '@mui/material';
import React from 'react'
import Cart from '../cart/cart';


type product={
    id: number,
    productName: string,
    price: number,
    productImage: string,

}
type Props={
    data:product
}
function Product(prop:Props) {
  const {id,productName,price,productImage}=prop.data;
  return (
    <div className="product">
      <img src={productImage}/>
      <div className="description">
        <p>{productName}</p>
        <h1>{price} - /</h1>
        <Button variant='contained' color='secondary' size='small' >Add to cart</Button>
      </div>
    </div>

  )
}

export default Product
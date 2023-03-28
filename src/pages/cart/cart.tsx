import React from 'react'
import { useState,createContext } from "react";


function Cart() {
  const [count, setcount] = useState(0);
  return (
    <div>{count}</div>
  )
}

export default Cart
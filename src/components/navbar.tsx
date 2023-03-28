import React from 'react'
import {Link} from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StorefrontIcon from '@mui/icons-material/Storefront';
import './navbar.css'
function Navbar() {
  return (
    <div className='navbar'>
        <div className='links'>
            <Link to='/'><StorefrontIcon color='primary' fontSize='large'/></Link>
            <Link to='/cart'><ShoppingCartIcon color='primary' fontSize='large'/></Link>
        </div>
    </div>
  )
}

export default Navbar
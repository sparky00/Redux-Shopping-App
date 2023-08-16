import React from 'react'
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux'

const NavbarComponent = () => {
const cartProducts = useSelector(state => state.cart);
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to='/' >Shop</Link>
        <Link
        to="/cart" 
        className="btn end-0"
         >
          Cart: {cartProducts.length}</Link>
      </div>
    </nav>
      );
}

export default NavbarComponent
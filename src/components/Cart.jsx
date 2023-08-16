import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { remove } from '../store/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector(state => state.cart)

    const onRemove =(id)=>{
        dispatch(remove(id));
    }

    const totalAmount = cartProducts.reduce((total, product) => {
      return total + product.price;
    }, 0);
    

  return (<div className='mt-3'>
    {cartProducts.map((product)=>(
      <div className="card mb-3" style={{maxWidth: "800px", marginLeft: "200px"}}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={product.image} className="img-fluid rounded-start" style={{width:"100px" , height:"140px"}} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">Rs. {product.price}</p>
            <p className="card-text"><small className="text-body-secondary">Rating: {product.rating.rate}</small></p>
            <button className='btn btn-danger position-absolute bottom-0 end-0 mb-2 me-2' onClick={()=> onRemove(product.id)}>Remove</button>
          </div>
        </div>
      </div>
    </div>
    ))}
    {/* Total Pay */}
    <div class="card w-75 mb-3" style={{maxWidth: "400px", marginLeft: "600px"}}>
  <div class="card-body">
    <h5 class="card-title">Total Payable Amount</h5>
    <p class="card-text">Rs.{totalAmount}</p>
    <button href="#" class="btn btn-dark">Confirm Order</button>
  </div>
</div>
 {/* Total Pay */}

</div>
  )
}

export default Cart;
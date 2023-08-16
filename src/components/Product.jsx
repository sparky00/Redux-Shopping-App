import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";


const Product = () => {
  // const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const {data: products} = useSelector(state => state.products)
  // const getData = async () => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((data) => data.json())
  //     .then((result) => setProducts(result));
  // };
  useEffect(() => {
    // getData();
    dispatch(getProducts());
  }, []);
  // console.log("Response", products);
     if(products.length === 0){
      return <div class="text-center mt-5">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>;
     }

  const addTOCart =(product)=>{
    dispatch(add(product));
  }

  const cards = products.map((product) => (
    
    <div className="col"> 
    <div key={product.id} className="card h-100" style={{ width: "18rem" }}>
        <div className="text-center">
      <img src={product.image} variant="top" style={{ width: "100px", height: '130px' }} />
      </div>
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">
          Rs. {product.price}
        </p>

        <button className="btn btn-dark" onClick={()=> addTOCart(product)}>Add to cart</button>
      </div>
    </div>
    </div>
    
    
  ))

  return (
    < >
      <div className="ms-5 mt-3` row row-cols-1 row-cols-md-4 g-4" >
        {cards}
      </div>
    </>
  );
};

export default Product;

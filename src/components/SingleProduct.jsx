import React, { useEffect, useState } from 'react';
import './SingleProduct.css'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
export default function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState();
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
      setProduct(response.data);
      })
  }, [id]);
 const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };
  return (
    <div>
        
        <Nav cart={cartItems} removeFromCart={removeFromCart} />

      {product ? (
        <div className='singleprodcon'>
            <div className='singleprodcon2'>
            <div className='SingleProdImg1'>
            <img src={product.image} alt=""/></div>
            <div className='singleprodcol'>
          <h1>{product.title}</h1>
          <h2> ${product.price}</h2>
          <h3> {product.category}</h3>
          <h5> {product.description}</h5>
          <Link to='/'><button onClick={()=>(localStorage.removeItem('cart'))} className='singlebtnprod'>Buy Product</button></Link>
          </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}

      <Footer/>
    </div>
  );
}

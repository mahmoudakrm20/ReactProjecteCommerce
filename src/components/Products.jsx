import React from 'react'
import './Products.css'
import axios from 'axios';
import banner5 from '../Shopwise/Banner55.jpg'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
export default function Products({addToCart}) {
  const [products, setProducts] = useState([]);
  function getProducts () {
    axios
    .get("https://fakestoreapi.com/products")
    .then((response) => {
      setProducts(response.data.slice(0, 8));
    })
  }
  useEffect(()=> {
    getProducts()
  },[])
  return (
    <>
    <div className='Products1'>
        <h1>Exclusive Products</h1>
        
    </div>
    <div className='productscontainer'>
      <div className='productflex'>
      {products.map((product1) => (
        <div className='productscol'>
          <div className='columnadjust' key={product1.id}>
            <div className='productsimgdiv'> 
          <img className='productsimg' src={product1.image} alt={product1.title} />
          </div> 
          <div className='Titlesprodcuts'>
          <Link to={`/singleproduct/${product1.id}`}>
            <h3>{product1.title}</h3>
            </Link>
          <h4>Price: $ {product1.price}</h4>
          {/* <p>Category: {product1.category}</p> */}
          {/* <p>Description: {product.description}</p> */}
          </div>
          <button className='buttonaddtocart' onClick={() => addToCart(product1)}>Add to Cart</button>
        </div>
        </div>
      ))}
      </div>
    </div>

    <div className='bannerdiv2'>
        <div className='cardcss2'>
            <p>Sale Get up to 50% Off</p>
            <h1 className='smrcollection'>Best Summer Collection</h1>
            <button>SHOP NOW</button>
        </div>
    <div className='bannercss'>
     <img className='bannerjpg' src={banner5}alt='banner'/>
     </div>  
    </div>
    </>
  )
}

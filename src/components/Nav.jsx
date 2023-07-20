import React from 'react'
import { useState } from 'react';
import './Nav.css'
import { Link } from 'react-router-dom';
import logopng from '../Shopwise/logo-4.png'
import searchpng from '../Shopwise/Search.png'
import cartpng from '../Shopwise/cart.png'
import cartpng2 from '../Shopwise/cart2.png'
import userpng from '../Shopwise/user.png'
import menu from '../Shopwise/menu.png'
export default function Nav({ cart , removeFromCart}) {
  const [showCartDropdown, setShowCartDropdown] = useState(false);
  const token = localStorage.getItem('token');
  const toggleCartDropdown = () => {
    setShowCartDropdown(!showCartDropdown);
  };
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };
  return (
    <>
    <div className="navbarcss">
      <div className='navleftcss'>
      <Link to ='/'><img src={logopng} alt="Logo" /> </Link>
        </div>
      <div className='navrightcss'>

      <div className="dropdowncss">
        <button className="dropbtncss">HOME <span style={{color:'gray'}}>˅</span>
          </button>
   <div className="dropdowncontentcss">
        <a href="#/">Fashion1</a>
        <a href="#/">Fashion2</a>
        <a href="#/">Fashion3</a>
      </div>
      </div> 
      <div className="dropdowncss">
        <button className="dropbtncss">PAGES <span style={{color:'gray'}}>˅</span>
          </button>
   <div className="dropdowncontentcss">
        <a href="#/">About Us</a>
        <a href="#/">Contact Us</a>
        <a href="#/">Faq</a>
        <a href="#/">Login</a>
        <a href="#/">Register</a>
      </div>
      </div> 
        <a className='productonavo' href="#/">PRODUCTS <span style={{color:'gray'}}></span></a>
        <a className='blogonafo' href="#/">BLOG</a>
        <a className='shoponavo' href="#/">SHOP</a>
        <a className='contactouso' href="#/">CONTACT US</a>
        <img className='searchpng' src={searchpng} alt="Logo" />
        
        {cart.length === 0 ? (
  <img className='cartpng' src={cartpng} alt='Logo' onClick={toggleCartDropdown} />
) : (
  <img className='cartpng' src={cartpng2} alt='Logo' onClick={toggleCartDropdown} />
)}
          {showCartDropdown && (
            <div className='dropdowncart'>
              <div className="cart-dropdown">
              {cart.map((item) => (
                 <div className='flexcart'>
                <div className='cartdropcss'>
                <div key={item.id}>
                  <div className='cartflexable'>
                  <div className='hamadacartimg'> <img className="cartimgcss" src={item.image} alt=""/></div>
                  <div className='cartcol'>
                  <h2>{item.title}</h2>
                  <h3>Quantity: {item.quantity}</h3>
                  <p>Price : {item.quantity} X {item.price} = {item.quantity*item.price}$</p>
                  </div>
                  </div>
                </div>
                </div>
                <div><button onClick={() => removeFromCart(item.id)} className='xbuttoncart'>x</button></div>
                </div>
                
              ))}
              {cart.length > 0 && (
              <div className='divcheckout'>
              <Link to='/Cart'><button className='Checkoutbtn'>Proceed To Checkout</button></Link>
              </div>
                )}
                {cart.length === 0 && (
              <div className='divcheckout'>
              <Link to='/Cart'><h3>Cart is empty</h3></Link>
              </div>
                )}
              </div>
              </div>
          )}
        <img className='userpng'src={userpng} alt="User"/>
        <img className='menupng'src={menu} alt="User"/>
        {token ? (
      <div className="dropdowncss">
        <button className="dropbtncss accountodetailso">Account <span style={{color:'gray'}}>˅</span></button>
        <div className="dropdowncontentcss">
          <a href="#/">Settings</a>
          <a href="#/">Privacy</a>
          <a href="#/">Security</a>
          <a href="#/" onClick={handleLogout}>Log out</a>
        </div>
      </div>
    ) : (
      <Link to="/Login"><a href="#/Login" className="loginbutton">Login</a></Link>
    )}
        </div>
    </div>
  </>  
  )
}

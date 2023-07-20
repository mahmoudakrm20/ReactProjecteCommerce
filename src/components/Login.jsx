import React, { useState, useEffect } from 'react';
import './Login.css'
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import Nav from '../components/Nav';
export default function Login() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    axios.post('https://fakestoreapi.com/auth/login', data)
      .then((response) => {
        const token = response.data.token;
        localStorage.setItem('token', token);
        navigate('/');
      });
  };
const [cartItems, setCartItems] = useState([]);
const token = localStorage.getItem('token');
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
    <>
    <Nav cart={cartItems} removeFromCart={removeFromCart} />
    {token ? (
    <div className='logincontainer'>
    <div className='LoginInsideContainer'>
    <h1 className='loggedinalready'>You are already logged in</h1>
    </div>
    </div>)
    :(
    <div className='logincontainer'>
    <div className='LoginInsideContainer'>
    <h1>Login</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        <h3>API Username</h3><br></br>
        <input className='usernameinput' value="mor_2314" {...register('username')} />
      </label>
      <br />
      <label>
      <h3>API Password</h3> <br></br>
        <input className='usernameinput' value="83r5^_" {...register('password')} type="password" />
      </label><br></br>
      <label className='labelremember' for="remember my password">
      <input className='rememberpw' type="checkbox" id="remember" name="remember"/>
       <span className='remembertext'> Remember my password </span>
      </label>
      <br />
      <button className='submitinput' type="submit">Log in</button>
    </form>
    </div>
    </div>)}
      <Footer />
    </>
  );
}


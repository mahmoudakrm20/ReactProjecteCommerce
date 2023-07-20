import React from 'react'
import './Card.css'
import bannerjpg from '../Shopwise/banner2.jpg'
import deliverypng from '../Shopwise/delivey.png'
import moneypng from '../Shopwise/money.png'
import paymentpng from '../Shopwise/payment.png'
import customerpng from '../Shopwise/customer.png'
import shopimg1 from '../Shopwise/shop_banner_img1.jpg'
import shopimg2 from '../Shopwise/shop_banner_img2.jpg'
export default function Card() {
  return (
    <>
    {/* banner  */}
    <div className='bannerdiv'>
        <div className='cardcss'>
            <p>Taking your Viewing Experience to Next Level</p>
            <h1>Man Fashion</h1>
            <button>SHOP NOW</button>
        </div>
    <div className='bannercss'>
     <img className='bannerjpg' src={bannerjpg}alt='banner'/>
     </div>  
    </div>
    <div className='container2cards'>
      <div className='containerinside'>
        <div className='firstcard'>
          <img src={shopimg1} alt="" />
          <div className='secondcarddetails'> 
          <h2>Super Sale</h2>
          <h1>New Collection</h1>
          <h3>Shop Now</h3>
        </div>
        </div>
        {/*  */}
        <div className='secondcard'>
        <img src={shopimg2} alt="" />
        <div className='secondcarddetails'> 
          <h1>New Season</h1>
          <h2>Sale 40% Off</h2>
          <h3>Shop Now</h3>
        </div>
        </div>
      </div>
    </div>
    {/* 3rd Section */}
    <div>
      <div className='containercss'>
        <div className='rowcss'>
          <div>
          <img className="delivery"src={deliverypng} alt="delivery"/>
          </div>
          <div className='hamada'>
        <h1>Free Delivery</h1>
        <p>Worldwide</p>
           </div>
        </div>
        <div className='rowcss'>
          <div>
          <img className="delivery"src={moneypng} alt="delivery"/>
          </div>
          <div className='hamada'>
        <h1>Money Returns</h1>
        <p>30 Days money return</p>
           </div>
        </div>
        <div className='rowcss'>
          <div>
          <img className="delivery" src={customerpng} alt="delivery"/>
          </div>
          <div className='hamada'>
        <h1>27/4 Online Support</h1>
        <p>Customer Support</p>
           </div>
        </div>
        <div className='rowcss'>
          <div>
          <img className="delivery"src={paymentpng} alt="delivery"/>
          </div>
        <div className='hamada'>
        <h1>Payment Security</h1>
        <p>Safe Payment</p>
           </div>
        </div>
      </div>
    </div> 
    </>
  )
}

import React from 'react'
import logo from '../../assets/images/TP-logo.webp'
import './footer.css'

function Footer() {
  return (
    <>
    <div className='footerContainer bg-white' >
        <div className='footerItem'>
            <img src={logo} height={30} width={70}/>
            <div className='d-flex'>
            <i class="bi bi-facebook fs-2"></i>&nbsp;&nbsp;
            <i class="bi bi-instagram fs-2"></i>
            </div>
        </div>
        <div className='footerItem'>
            <p>Who We Are</p>
            <p>Are you a Tyre Dealer?</p>
        </div>
        <div className='footerItem'>
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
        </div>
        <div className='footerItem'>
            <p>Contact Us</p>
            <p>Career</p>
            <p>Shipping & Return Policy </p>
        </div>
        <hr />
    </div>
     <p className='d-flex justify-content-center'>©2024 TyrePlex Technologies & Commerce Pvt. Ltd. All Rights Reserved.</p>
     </>
  )
}

export default Footer
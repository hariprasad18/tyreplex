import React from 'react'
import './payment.css'; 

function Payment() {
  return (
    <div className='bg-white fw-bold payment-container'>
      <h5>Payment Mode</h5>
      <ol className='d-flex payment-list'>
        <li>Deposit to Account </li>
        <li>Credit Card/Debit Card </li>
        <li>Wallets (PayTM/PhonePe/Amazon etc.) </li>
        <li>Net Banking </li>
        <li>UPI</li>
      </ol>
    </div>
  )
}

export default Payment

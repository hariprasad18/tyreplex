import React from 'react'
import Store from './store/Store'
import Deals from './deals/Deals'
import Services from './services/Services'
import Sales from './sales/Sales'
import Payment from './paymentDetails/Payment'
import Quiries from './quiries/Quiries'

const Body = () => {
  return (
    <div style={{marginLeft:'5%', marginRight:'5%'}}>
    <Store />
    <Deals />
    <Services />
    <Sales />
    <Payment />
    <Quiries />
    </div >
  )
}

export default Body
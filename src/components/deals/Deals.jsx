import React from 'react'
import './deals.css'
import DealTab from './DealTab'
import mrf from '../../assets/images/mrf.jpg'
import ceat from '../../assets/images/ceat.png'
import goodYear from '../../assets/images/goodyear.png'
import appollo from '../../assets/images/apollo.png'
import bridgestone from '../../assets/images/bridgestone.png'
import jkTyre from '../../assets/images/jktyre.png'

const Deals = () => {
  return (
    
    <div className='dealsDiv'>
    <h6>Deals</h6>
    <div className='d-flex justify-content-between'>
      <DealTab url={mrf} name={'MRF'}/>
      <DealTab url={ceat} name={'CEAT'}/>
      <DealTab url={goodYear} name={'Good Year'}/>
      <DealTab url={appollo} name={'Appollo'}/>
      <DealTab url={bridgestone} name={'Bridge Stone'}/>
      <DealTab url={jkTyre} name={'JK Tyre'}/>
      </div>
      </div>
    
  )
}

export default Deals
import React from 'react'
import wheelBalance from '../../assets/images/whelBalace.webp'
import wheelAlignment from '../../assets/images/wheelAlignment.webp'
import ServicesTab from './ServicesTab'
import './services.css'

const Services = () => {
  return (
    <div className='servicesDiv'>
    <h6>Services offered by this dealer</h6>
    <div className='d-flex justify-content-evenly service'>
      <ServicesTab url={wheelBalance} name={'Wheel Balancing'}/>
      <ServicesTab url={wheelAlignment} name={'Wheel Alignment'}/>
      </div>
      </div>
  )
}

export default Services
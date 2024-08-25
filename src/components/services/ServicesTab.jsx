import React from 'react'

const ServicesTab = (props) => {
  return (
    <div className='serviceTab'>
        <img src={props.url} alt='brand' height={100} width={150}/>
        <p className='fw-bold'>{props.name}</p>
    </div>
  )
}

export default ServicesTab
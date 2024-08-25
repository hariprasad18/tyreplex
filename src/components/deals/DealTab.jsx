import React from 'react'

const DealTab = (props) => {
  return (
    <div className='tab'>
        <img src={props.url} alt='brand' height={50} width={100}/>
        <p>{props.name}</p>
    </div>
  )
}

export default DealTab
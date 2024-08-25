import React from 'react'
import { Form } from 'react-bootstrap'
import query from '../../assets/images/query.webp'
import './quiries.css'

function Quiries() {
  return (
    <div className='quiriesDiv p-4'>
        <h6>Have a question about Tyres?</h6>
        <p>Get an answer in 24 hours from our experts.</p>
        <Form.Control className='inputField' size="sm" type="text" placeholder="Ask or Search Your Question ?" />
        <img className='queryImage' src={query} alt='query' width={100} height={100}/>
    </div>
  )
}

export default Quiries
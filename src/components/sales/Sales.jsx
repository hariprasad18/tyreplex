import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import SalesTabs from './SalesTabs'
import './sales.css'

const Sales = () => {
  return (
    <div>
      <p className='fw-bold'>Tyres sold by this Dealer</p>
      <div className='row justify-content-end mb-3'>
        <div className='col-md-2 mb-2'>
          <Form.Select className='w-100'>
            <option>Filter By</option>
            <option>MRF</option>
            <option>CEAT</option>
            <option>Good Year</option>
            <option>Appollo</option>
            <option>Bridge Stone</option>
            <option>JK Type</option>
          </Form.Select>
        </div>
        <div className='col-md-2 mb-2'>
          <Form.Select className='w-100'>
            <option>Most Popular</option>
            <option>Price High to Low</option>
            <option>Price Low to High</option>
          </Form.Select>
        </div>
      </div>
      <Row>
        {[...Array(8)].map((_, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3} className='mb-4'>
            <SalesTabs cost={3510} type={'Tube Type'} />
          </Col>
        ))}
      </Row>
      <div className='text-center'>
        <button className='btn btn-info'>
          View More <i className="bi bi-arrow-down-short ms-2"></i>
        </button>
      </div>
      <br />
      <p><span>Home</span> /<span> Tyre Dealers</span> /<span> Tyre Dealers Ghaziabad </span> /<span> SHREE HEMKUNT TYRES AND SERVICES</span>
 

</p>
    </div>
  )
}

export default Sales

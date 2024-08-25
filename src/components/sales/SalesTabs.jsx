import React from 'react'
import { Col, Row } from 'react-bootstrap'
import apollo from '../../assets/images/apollo.png'
import tyre from '../../assets/images/tyre.jpg'

const SalesTabs = (props) => {
  return (
    <div className='salesTabs p-1'>
      <Row className='border bg-white p-1'>
        <Col xs={12} md={7} className='d-flex flex-column text-align-center justify-content-between p-1 mb-3 mb-md-0'>
          <img src={apollo} alt='apollo' height={50} width={100} className='mb-2'/>
          <p className='fw-bold mb-1'>AMAZER 4G LIFE</p>
          <p className='mb-1'>160/70/R14</p>
          <p className='mb-1'><span className='points'><i className="bi bi-star-fill stars"></i>4.2</span>{' '}320 Reviews</p>
          <p className='mb-1'>{`\u20B9`}{props.cost}</p>
          <p className='text-success fs-6 mb-1'>Offer Available</p>
          <p className='mb-0'>{props.type}</p>
        </Col>

        <Col xs={12} md={5} className='d-flex flex-column align-items-center p-1'>
          <i className="text-success bi bi-shield-fill-check shield mb-2">5 Years Warranty</i>
          <img src={tyre} alt='Tyre' height={200} width={90} />
        </Col>
      </Row>
    </div>
  )
}

export default SalesTabs

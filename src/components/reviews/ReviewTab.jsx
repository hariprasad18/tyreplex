import React from 'react'
import { Col, Row } from 'react-bootstrap'
import '../store/store.css'

const Reviews = (props) => {
  return (
    <Col className='review m-1 p-2'>
    <Row>
    <div className='d-flex align-items-center'>
    <img className="rounded-circle" src={props.url} alt='Review' width={30} height={30} />
    <p className='fw-bold'>{props.name}</p>
    </div>
    </Row>
    <div>
    <p>{props.content}</p>
    </div>
    </Col>
  )
}

export default Reviews
import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './store.css'
import image from '../../assets/images/Tyreplex.jpg'
import image1 from '../../assets/images/tyreplex1.jpg'
import Reviews from '../reviews/Reviews';



const Store = () => {
  return (
    <div className='storeBody'>
    <Row>
        <Col>
        <div className='storeHeader'>
            <h5>SHREE HEMKUNT TYRES AND SERVICES</h5>
            <i  className="bi bi-shield-fill-check shield">Verified</i>
        </div>
        <div className='reviewDiv d-flex justify-content-evenly p-2'>
            <p className='points'>4.6</p>
            <div>
            <i className="bi bi-star-fill stars"></i>
            <i className="bi bi-star-fill stars"></i>
            <i className="bi bi-star-fill stars"></i>
            <i className="bi bi-star-fill stars"></i>
            <i className="bi bi-star-fill"></i>
            </div>
            <p className='reviewsCount'>2278 Reviews</p>
            <p className='rate '>Rate</p>
        </div>
        <div className='address d-flex'>
        <i className="bi bi-geo-alt me-2"></i>
        <p>PLOT NUMBER-09 GROUND FLOOR CISF CAMPUS ROAD, AHINSA KHAND-02 INDIRAPURAM, Ghaziabad, Uttar Pradesh, 201014</p>
        </div>
        <div className='d-flex'>
        <i className="bi bi-clock me-2"></i>
        <p>Open - Monday   to   Sunday - 10:00AM to 8:00PM</p>
        </div>
        <button className='btn btn-danger d-flex'>Get Directions</button>
        <p className='d-flex fw-bold'>2278 Google Reviews</p>
        </Col>
        <Col>
        <img src={image} alt="Store front" height={170} width={250} />
<img src={image1} alt="Interior of the store" height={170} width={250} />

        </Col>
       <Reviews />
    </Row>
    </div>
  )
}

export default Store
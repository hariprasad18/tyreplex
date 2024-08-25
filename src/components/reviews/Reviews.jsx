import React from 'react'
import Reviews from './ReviewTab';
import steve from '../../assets/images/steve.jpg'
import mark from '../../assets/images/mark.jpg'
import elon from '../../assets/images/musk.jpg'
import { data } from '../../assets/js/data';

const ReviewsTab = () => {
  return (
    <div className='d-flex'>
    <Reviews  url={steve} name={data.name} content={data.content}/>
    <Reviews  url={mark} name={data.name1} content={data.content1}/>
    <Reviews  url={elon} name={data.name2} content={data.content2}/>
  </div>
  )
}

export default ReviewsTab
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const Slides = () => {
  return (
    <Carousel className='mt-2'>
      <Carousel.Item>
        <div className='d-flex flex-wrap justify-content-center'>
        <img src='https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1726038890736_playcardnewweb.jpg' className='rounded-3'/>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className='d-flex flex-wrap justify-content-center'>
       <img src="https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1744615674008_companionpreviewweb.jpg" alt=""  className='rounded-3' />
        </div>
      </Carousel.Item>
      
    </Carousel>
  )
}

export default Slides
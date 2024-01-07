import React from 'react'
import Container from '../../elements/Container'
import AliceCarousel from 'react-alice-carousel'
import '../../../css/caroussel.css'
import Product1 from '../../../media/images/products/Product-1.jpg'
import Product2 from '../../../media/images/products/Product-2.jpg'
import Product3 from '../../../media/images/products/Product-3.jpg'


export default function Event() {

  const handleDragStart = (e) => e.preventDefault();

  const items = [
    <img src={Product1} alt='' onDragStart={handleDragStart}  />,
    <img src={Product2} alt='' onDragStart={handleDragStart} />,
    <img src={Product3} alt='' onDragStart={handleDragStart}  />,
  ];

  return (
    <Container>
      <div className='shadow-2xl mb-20 h-96 '></div>
      <AliceCarousel
        mouseTracking
       items={items}
       autoPlay />
    </Container>
  )
}


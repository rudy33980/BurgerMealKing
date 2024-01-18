import React from 'react'
import Container from '../../elements/Container'
import AliceCarousel from 'react-alice-carousel'
import '../../../css/caroussel.css'
import Image1 from '../../../media/images/photos/dorian-hurst-d-igN2ptyC8-unsplash.jpg';
import Image2 from '../../../media/images/products/Product-1.jpg';
import Image3 from '../../../media/images/products/Product-2.jpg';
import Heading from '../../elements/DisplayTitles/Heading'



const Slide = ({ children, category, title, image, alt }) => {
  return (
    <div className='grid md:grid-cols-2 p-3 md:p-6 '>
      <div className='p-5 md:p-10 md:mb-10 '>
        <Heading variant='h4'>
          {category}
        </Heading>
        <Heading theme="secondary" variant="h3" className="mb-5">
          {title}
        </Heading>
        <p className='tracking-wide text-lg leading-relaxed font-light text-gray-500 mb-0 md:mb-10 '>
          {children}
        </p>
      </div>
      <div className='relative w-full md:h-full'>
        <img src={image} alt={alt} className='bg-yellow-500 absolute top-0 left-0 w-full h-full object-cover object-bottom z-0' />
      </div>
    </div>
  )
}

export default function Event() {

  const items = [
    <Slide
      image={Image1}
      category="évènement à venir"
      title="vivez la demi-finale"
    >
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero quis perspiciatis rerum nam voluptatibus aut quibusdam architecto soluta quia ab.
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero quis perspiciatis rerum nam voluptatibus aut quibusdam architecto soluta quia ab.
    </Slide>,

    <Slide
      image={Image2}
      category="Nouveau Burger"
      title="découvrez le killer burger"
    >
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero quis perspiciatis rerum nam voluptatibus aut quibusdam architecto soluta quia ab.
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero quis perspiciatis rerum nam voluptatibus aut quibusdam architecto soluta quia ab.
    </Slide>,

    <Slide
      image={Image3}
      category="Nouvelle recette  "
      title="Le végéBurger">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero quis perspiciatis rerum nam voluptatibus aut quibusdam architecto soluta quia ab.
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero quis perspiciatis rerum nam voluptatibus aut quibusdam architecto soluta quia ab.
    </Slide>
  ];

  return (
    <Container>
      <div className='shadow-2xl mb-20 border-gray-100'>
      <AliceCarousel
        mouseTracking
        items={items}
        autoPlay
        infinite
        autoPlayInternal
        disableButtonsControls
        animationType='fadeout' 
      />
      </div>
    </Container>
  )
}


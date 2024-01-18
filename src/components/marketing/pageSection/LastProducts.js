import React from 'react'
import Container from '../../elements/Container'
import Image1 from '../../../media/images/products/LastProducts-1.jpg'
import Image2 from '../../../media/images/products/LastProducts-2.jpg'
import Image3 from '../../../media/images/products/LastProducts-3.jpg'

export default function LastProducts() {
  return (
    <Container>
      <div className='grid grid-row-3 lg:grid-rows-2 lg:grid-cols-2 gap-3 lg:gap-9 w-full h-96 lg:px-11 my-20 text-white uppercase'>

        <div className='relative bg-primary row-span-2 h-full rounded-md  p-5'>
          <img src={Image1} className='absolute top-0 left-0 h-full w-full object-cover z-0 rounded-md' alt=''></img>
          <div className='relative z-10'>
            <span className='block font-bold text-lg'> Killer Burger</span>
            <span className='text-xl font-black'> Burger le plus poulaire</span>
          </div>
        </div>

        <div className='relative bg-primary h-full rounded-md '>
          <img src={Image2} className='absolute top-0 left-0 h-full w-full object-cover z-0 rounded-md' alt=''></img>
          <div className='relative z-10'>
            <span className='block font-bold text-lg' > Island Burger</span>
            <span className='block text-2xl from-black'></span>
            <span className='text-xl font-black'> plus de goût</span>
          </div>
        </div>

        <div className='relative bg-primary h-full rounded-md lg:p-7 p-5'>
          <img src={Image3} className='absolute top-0 left-0 h-full w-full object-cover z-0 rounded-md ' alt=''></img>
          <div className='relative z-10'>
            <span className='block font-bold text-lg'>Orlando's Burger</span>
            <span className='text-xl font-black'>frais & pimenté</span>
          </div>
        </div>
      </div>
    </Container >
  )
}

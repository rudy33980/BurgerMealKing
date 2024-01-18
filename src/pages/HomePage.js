import React from 'react'
import HeroTop from '../components/marketing/pageSection/HeroTop'
import LastProducts from '../components/marketing/pageSection/LastProducts'
import Products from '../components/marketing/pageSection/Products'
import Event from '../components/marketing/pageSection/Event'
import Booking from '../components/marketing/pageSection/Booking'
import Footer from '../components/marketing/pageSection/Footer'

export default function HomePage() {
  return (
    <>
    <div className='bg-red-500 sm:bg-blue-500 md:bg-yellow-600 lg:bg-indigo-500 xl:bg-green-500 2xl:bg-pink-500 w-full h-20'>
      <div className='hidden md:block'>Screen :md</div>
    </div>
      <HeroTop />
      <LastProducts />
      <Products />
      <Event />
      <Booking />
      <Footer />
    </>
  )
}

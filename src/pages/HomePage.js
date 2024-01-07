import React from 'react'
import HeroTop from '../components/marketing/pageSection/HeroTop'
import LastProducts from '../components/marketing/pageSection/LastProducts'
import Products from '../components/marketing/pageSection/Products'
import Event from '../components/marketing/pageSection/Event'

export default function HomePage() {
  return (
    <>
      <HeroTop />
      <LastProducts />
      <Products />
      <Event />
    </>
  )
}

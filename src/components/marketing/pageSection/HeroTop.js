import React from 'react'
import Illustration from '../../../media/images/background/bg-food.jpg'
import Container from '../../elements/Container'
import Header from './Header'
import Product from '../../../media/images/heroTop/burger-hero-top.png'
import Button from '../../elements/Button'
export default function HeroTop() {
    return (
        <div className='bg-secondary w-full'>
            <div className='bg-repeat w-full h-full pb-40' style={({ backgroundImage: `url(${Illustration}` })}>
                <Container>
                    <Header />
                    <div className='relative mt-20 w-full'>
                        <img src={Product} className="absolute z-0 -top-64 right-0 w-6/12" alt="Un menu hamburger avec frites et coca cola"></img>

                        <div className='relative z-10 text-secondary uppercase'>
                            <h1 className='mb-4 font-semibold'>C'est le moment de goûter au bon goût des hamburgers</h1>
                            <h2 className='font-secondary'>
                                <span className='text-8xl block'>Burger</span>
                                <span className='text-6xl'>House</span>
                                <span className='text-4xl ml-3'>Click<span className='text-red-primary'>&</span>collect</span>
                            </h2>
                        </div>
                    </div>
                    <Button className="mt-5" color="secondary" theme="big">
                        Créer mon compte
                    </Button>
       
                </Container>

            </div>
        </div>
    )
}

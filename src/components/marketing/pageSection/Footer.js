import React from 'react'
import Container from '../../elements/Container'
import BackgroundImage from '../../../media/images/background/bg-footer.jpg'
import { BeakerIcon } from '@heroicons/react/24/solid'
import Logo from "../../../media/svg/Logo-burger-house-white.svg"


export default function Footer() {
    return (
        <Container>
            <div className='relative mb-20 p-5 text-white '>
                <img src={BackgroundImage} alt="Un plan de travail de cuisine ou l'on conçoit un hamburger" className='bg-black absolute top-0 left-0 w-full h-full object-cover z-0' />
                <div className='relative grid grid-cols-2 h-96 z-10'>
                    <div className='h-full w-full flex ' >
                        <img src={Logo} alt='Logo burger House' className='w-2/3'></img>
                        <p className='mt-10'> </p>                      
                    </div>
                    <div className='h-full w-full flex flex-col items-center justify-center'>

                        <div className='flex items-center'>
                            <BeakerIcon class="h-6 w-6 text-blue-500" />
                            <span className='uppercase font-extrabold text-lg tracking-tighter'>15 place bellecour, 6900 Lyon</span>
                        </div>

                        <div className='flex items-center'>
                            <BeakerIcon class="h-6 w-6 text-blue-500" />

                            <span className='uppercase font-extrabold text-lg tracking-tighter'>info@burger-house.com</span>
                        </div>
                    </div>
                </div>
           
            <div className='relative -10 z-10 flex items-center justify-between'>
                <div className='uppercase font-extrabold tracking-tighter text-sm'>
                    @burger house 2021. All rights reserved
                </div>
                <div className='flex'>
                    <div>
                        
                    </div>
                </div>
            </div>
            </div>

        </Container>
    )
}

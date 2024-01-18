import React from 'react'
import Container from '../../elements/Container'
import BackgroundImage from '../../../media/images/background/bg-footer.jpg'
import { BeakerIcon } from '@heroicons/react/24/solid'
import Logo from "../../../media/svg/Logo-burger-house-white.svg"


export default function Footer() {
    return (
        <Container>
            <div className='relative lg:mb-20 p-5 text-white '>
                <img src={BackgroundImage} alt="Un plan de travail de cuisine ou l'on conçoit un hamburger" className='bg-black absolute top-0 left-0 w-full h-full object-cover z-0' />
                <div className='relative grid md:grid-cols-2 z-10'>
                    <div className='w-full p-5 md:mt-20 mt-10 md:mb-28' >
                        <img src={Logo} alt='Logo burger House' className='w-2/3'></img>
                        <p className='mt-10'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, dolore nemo. Eos ea maxime voluptates error quam, temporibus similique ad tempora animi, sapiente eius aliquam. Reprehenderit cum, vitae sequi, aliquid odit modi aliquam nesciunt ex illum nobis  
                        </p>
                    </div>
                    <div className='md:h-full w-full flex flex-col items-start md:items-center justify-center mb-10 md:mb-0 p-5 md:p-0'>

                        <div className='flex items-center'>
                            <BeakerIcon className="h-6 w-6 md:h-10 md:w-10 mr-5" />
                            <span className='uppercase font-semibold text-sm md:text-lg tracking-tighter'>15 place bellecour, 6900 Lyon</span>
                        </div>

                        <div className='flex items-center'>
                            <BeakerIcon class="h-6 w-6 md:h-10 md:w-10 mr-5" />

                            <span className='uppercase font-semibold text-sm md:text-lg tracking-tighter'>info@burger-house.com</span>
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

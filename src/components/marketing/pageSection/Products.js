import React from 'react'
import Container from '../../elements/Container'
import HeadingTitles from '../../elements/DisplayTitles/HeadingTitles'
import Heading from '../../elements/DisplayTitles/Heading'
import Button from '../../elements/Button'
import Product1 from '../../../media/images/products/Product-1.jpg'
import Product2 from '../../../media/images/products/Product-2.jpg'
import Product3 from '../../../media/images/products/Product-3.jpg'

export default function Products() {
    return (
        <Container>
            <HeadingTitles>
                Toujours des délicieux burgers
            </HeadingTitles>

            <Heading variant='h2' theme='secondary' display='gray' alignement='center' >
                Choisissez et savourez
            </Heading>

            <p className='text-center'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam est dolor doloribus? Voluptas, inventore dolor est illum voluptates, officiis magni deleniti iste quas dolore ea natus velit harum optio error.
            </p>

            <div className='grid lg:grid-cols-3 gap-x-1 my-20 mt-10'>

                <div className='w-full md:w-2/3 lg:w-full h-full mx-auto'>
                    <div className='relative w-full h-72'>
                        <img src={Product1} alt='' className='bg-primary absolute top-0 left-0 w-full h-full object-cover z-0 md:w-2/3' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <Heading variant='h3' className='my-5'>
                            Lorem ipsum dolor
                        </Heading>
                        <p className='text-center'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit
                        </p>
                        <Button color="danger" className="font-secondary mb-10 lg:mb-0">
                            Commandez
                        </Button>
                    </div>
                </div>
                <div className='w-full h-full'>
                    <div className='relative w-full h-72'>
                        <img src={Product2} alt='' className='bg-primary absolute top-0 left-0 w-full h-full object-cover z-0 md:w-2/3' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <Heading variant='h3' className='my-5'>
                            Lorem ipsum dolor
                        </Heading>
                        <p className='text-center'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit
                        </p>
                        <Button color="danger" className="font-secondary mb-10 lg:mb-0">
                            Commandez
                        </Button>
                    </div>
                </div>
                <div className='w-full h-full'>
                    <div className='relative w-full h-72'>
                        <img src={Product3} alt='' className='bg-primary absolute top-0 left-0 w-full h-full object-cover z-0 md:w-2/3' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <Heading variant='h3' className='my-5'>
                            Lorem ipsum dolor
                        </Heading>
                        <p className='text-center'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit
                        </p>
                        <Button color="danger" className="font-secondary lg:mb-0">
                            Commandez
                        </Button>
                    </div>
                </div>

            </div>

        </Container>
    )
}

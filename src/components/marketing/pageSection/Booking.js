import React from 'react'
import Container from '../../elements/Container'
import Assiette from '../../../media/images/background/Assiette-burger-frites.png'
import Burger from '../../../media/images/background/Burger.png'
import Sauce from '../../../media/images/background/Sauce-pimente.png'
import Heading from '../../elements/DisplayTitles/Heading'

export default function Booking() {
    return (
        <Container>
            <div className='relative mb-20'>
                <img src={Burger} alt="Un hamburger" className='absolute -top-20 -left-36 z-10' />
                <img src={Sauce} alt="Une sauce pimentée" className='hidden lg:block absolute bottom-0 left-0' />
                <img src={Assiette} alt="Une assiette hamburger frites" className='absolute -bottom-52 -right-96' />
                <div className='max-w-3xl mx-auto py-72 '>
                    <Heading variant='h3' alignement="center">
                        Reservation
                    </Heading>
                    <Heading alignement="center" theme="secondary" className="mt-5">
                        Reservez votre table
                    </Heading>
                    <form className='grid grid-cols-2 gap-x-7 gap-y-6 mt-20'>
                        <div >
                            <label htmlFor='name'>
                                Nom
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                autocomplete="off"
                                className="focus:ring-primary focus:border-primacy focus:border block w-full border-gray-400 rounded-md p-5 cursor-pointer"
                                placeholder="John Doe"
                            />
                        </div>

                        <div >
                            <label htmlFor='name'>
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                autocomplete="off"
                                className="focus:ring-primary focus:border-primacy focus:border block w-full border-gray-400 rounded-md p-5"
                                placeholder="john.doe@gmail.com"
                            />
                        </div>

                        <div >
                            <label htmlFor='name'>
                                Date
                            </label>
                            <input
                                type="time"
                                name="customer"
                                id="customer"
                                autocomplete="off"
                                className="focus:ring-primary focus:border-primacy focus:border block w-full border-gray-400 rounded-md p-5"
                                placeholder="John Doe"
                            />
                        </div>

                        <div >
                            <label htmlFor='name'>
                                Heure
                            </label>
                            <input
                                type="time"
                                name="time"
                                id="time"
                                autocomplete="off"
                                className="focus:ring-primary focus:border-primacy focus:border block w-full border-gray-400 rounded-md p-5"
                            />
                        </div>

                        <div >
                            <label htmlFor='customer'>
                                Nombre de personnes
                            </label>
                            <input
                                type="text"
                                name="customer"
                                id="customer"
                                autocomplete="off"
                                className="focus:ring-primary focus:border-primacy focus:border block w-full border-gray-400 rounded-md p-5"
                                placeholder="5"
                            />
                        </div>

                        <div >
                            <label htmlFor='sendBooking' className='invisible'>
                            Trouver une table
                            </label>
                            <input
                                type="button"
                                name="sendBooking"
                                id="sendBooking"
                                className="bg-red-primary hover:bg-red-primary-hover w-full text-white font-secondary tracking-widest uppercase py-5 cursor-ponter rounded-md animate"
                                value="Trouver une table"
                            />
                        </div>

                    </form>
                </div>
            </div>


        </Container>

    )
}

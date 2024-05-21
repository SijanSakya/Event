import React from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import eventcollage from 'static/img/home/event-collage.png';
import { BsFillShareFill } from 'react-icons/bs'

interface DetailsProps {

}
const Details: React.FC<DetailsProps> = () => {


    return (
        <>
            
                <div className='relative inset-0'>
                    <div className='bg-cover min-w-full h-[450px] md:h-[340px] bg-center'>
                        <div className=' '>
                            <Image src={eventcollage} alt='logo' layout='fill' objectFit='cover' />
                        </div>
                    </div>

                    {/* <div className="flex flex-col absolute inset-10 justify-end items-center  text-white ">
                        <div className='flex flex-col md:flex-row gap-4 mt-7 '>
                            <Link
                                href="/about-us"
                                className=''>
                                <button className='bg-white text-black font-bold py-2 px-4 rounded-md text-xl hover:bg-red-600 hover:text-3xl'>About Us</button>
                            </Link>
                        </div>
                    </div> */}
                </div>
                <div className='bg-black h-20 w-full flex gap-20 justify-center '>
                    <div className=' text-white text-center flex justify-center uppercase items-center md:text-4xl text-2xl '>
                        <h2>Monkey temple</h2>
                    </div>

                    <div className=' border text-white flex justify-center items-center md:my-5 my-4 md:py-2 px-3 rounded-md text-sm md:text-base'>
                        <Link href="/" >
                            <BsFillShareFill />
                        </Link>
                    </div>
                </div>



                {/* details */}
                <div className='h-full w-full bg-white relative inset-0'>

                    <section className=" bg-white duration-700 flex flex-col  mx-8 md:my-16 md:mx-64 rounded-md p-10 text-gray-800">
                        <div className="font-bold text-xl py-1">
                            <h2 className="">ABOUT PVE NETWORK</h2>
                        </div>
                        <div className="py-3 text-lg">

                            <p className='py-2'>
                                PVE Network will be amongst the top ten mobile application companies
                                in the world to provide with a feature of Stereo Sound and HD Quality
                                Video experience for the users, while musicians perform live on stage.
                                Many features such as news and updates, live events, videos streaming,
                                lessons, music shop, audio streaming, web dashboard for the project
                                owner to handle all updates, e-commerce business, etc will be included
                                in PVE Network.
                            </p>

                            <p className='py-2'>
                                Since the world is gradually changing into virtual and digital market,
                                drastically and Nepal being a third world country can be explored
                                massively for the first comers, as we have seen and know that the
                                Nepali Entertainment Industry has been stuck in its qualities because
                                it has been less explored and has never grown economically because of
                                poor delivery in terms of standards. However, PVE Network
                                understanding the circumstances takes it as a responsibility with an
                                aims to set a new milestone for the Nepali audience to experience the
                                missing factors and attempts to take the industry into a complete new
                                level, setting an example internationally.
                            </p>

                            <p className='py-2'>
                                Considering financial constraint of general public and targeting all
                                class of people and age group of the users, PVE Network will be
                                provided an option to purchase exclusive videos on demand and products
                                starting from Rupees Ten onwards through its mobile application.
                            </p>

                            <p className='py-2'>
                                PVE Network will also be a pioneer in making it the first ever one
                                stop entertainment, mobile application, in which online payments will
                                be received from all around the world, for contents the users would
                                like to subscribe or purchase, based on their needs.
                            </p>
                        </div>
                        <div className='flex flex-col md:flex-row gap-4 mt-7 '>
                            <Link
                                href="/about-us"
                                className=''>
                                <button className='bg-red-700 uppercase text-black font-bold py-2 px-4 rounded-md text-xl hover:bg-red-600 '>Subscribe</button>
                            </Link>
                        </div>
                        
                    </section>

                </div>
            

        </>
    )
}

export default Details
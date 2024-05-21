import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import eventList from '../../data/events';

import logo from '/static/img/events/project-one/mobile/thumbnail.png'
import { BsFillShareFill } from 'react-icons/bs'
//import { EventProps } from '@src/pages/pastEvents'
import { WiTime8 } from 'react-icons/wi'
import { ImVideoCamera } from 'react-icons/im'
import { IoLocationSharp } from 'react-icons/io5'

interface EventProps {
    title: string;
    subtitle: string;
    image: string;
    thumbnail: string;
    date: string;
    landMark: string;
    link: string;
    slider: {
        title: string;
        subtitle: string;
        image: string;
        mobileHero: string;
    };
    location: string; // Add the 'location' property
}


const UpcomingEvents = () => {

    const [numToShow, setNumToShow] = useState(8);

    const handleViewMore = () => {
        const increment = 5;
        setNumToShow(numToShow + increment);
    };

    const handleViewLess = () => {
        const decrement = 5;
        setNumToShow(numToShow - decrement);
    };

    return (
        <>
            <div className="h-full w-full bg-black  p-10 md:px-1 ">
                <div className="uppercase font-bold text-white justify-center item-center py-4 text-center text-5xl object-scale-down ">
                    <h2>Past Events</h2>
                </div>

                {eventList?.slice(0, numToShow).map((event: any, index: number) => (
                    <section key={index} className="bg-custom-gray md:mx-28 my-8 rounded-md  p-4  justify-center items-center pb-7 md:pb-2">

                        <div className="relative  flex flex-col md:flex-row gap-10  md:m-3 text-lg text-white  align-items  justify-start text-start ">
                            <div className=' flex justify-center'>
                                <Image src={logo} alt='logo' width={400}  />
                            </div>

                            <div className="flex flex-col gap-2 justify-start md:items-start text-base md:w-full px-4 md:px-0 ">
                                <div>
                                    <h2 className='font-bold text-xl'>{event.title}</h2>
                                    <div className="flex items-center">
                                        <WiTime8 />
                                        <p className="ml-2">{event.date}</p>
                                    </div>
                                    <div className="flex items-center">
                                        <ImVideoCamera />
                                        <p className="ml-2">{event.landMark}</p>
                                    </div>
                                    <div className="flex items-center">
                                        <IoLocationSharp />
                                        <p className="ml-2">{event.location}</p>
                                    </div>

                                </div>

                                <div className='flex w-full justify-between md:justify-between mt-10 md:mt-0 text-base '>
                                    <div className='flex gap-3 text-sm md:text-base'>
                                        <Link href={`/pastEvents/${event.title}`}>
                                            <button className=' text-white border uppercase item-center md:my-6 py-2 px-4 rounded-md text-sm md:text-base'>Read more</button>
                                        </Link>
                                        <div className=' border flex justify-center items-center md:my-6 py-2 px-3 rounded-md text-sm md:text-base'>
                                            <a href={event.link}><BsFillShareFill /> </a>
                                        </div>
                                    </div>
                                    <div className=' flex items-center text-base justify-end'>
                                        <Link href="/">
                                            <button className='bg-red-600 text-white uppercase font-bold py-2 px-2 md:px-4 rounded-sm md:text-base text-sm border '>Gallery</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>
                ))}

                <div className='uppercase  text-white justify-center item-center py-4 text-center'>


                    {numToShow < eventList?.length ? (
                        <button onClick={handleViewMore} className="bg-red-500 text-white uppercase item-center font-bold py-2 px-4 rounded-md">View More</button>
                    ) : (
                        <button onClick={handleViewLess} className="bg-red-500 text-white uppercase item-center font-bold py-2 px-4 rounded-md">View Less</button>
                    )}
                </div>


            </div>

        </>
    )
}

export default UpcomingEvents
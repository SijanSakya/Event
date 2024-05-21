

import React from 'react'

import Link from 'next/link';
import Image from 'next/image';

import eventcollage from 'static/img/home/event-collage.png';

interface AlbumProps {
    title: string;
    subtitle: string;
  }

const Album: React.FC<AlbumProps> = () => {
    return (
        <div>
            <div className='relative top-0'>
                <div className='bg-cover h-screen bg-center bg-opacity-20'>
                    <div className=' min-w-full '>
                        <Image src={eventcollage} alt='logo' layout='fill' objectFit='cover' />
                        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                    </div>
                    
                </div>

                <div className="flex  flex-col absolute inset-0 justify-center items-center text-white gap-10">

                    <div className='md:text-4xl font-bold text-xl uppercase text-center flex flex-col gap-4 ' >
                        <h1>Unlimited News & Updates</h1>
                        <h1>Live Events, Sports, Reality Shows,</h1>
                        <h1>music and more.</h1>
                    </div>
                    <div className='flex flex-col md:flex-row gap-4 mt-7 '>
                        <Link
                            href="/about-us"
                            className=''>
                            <button className='bg-white text-black font-bold  uppercase py-2 px-4 rounded-md text-xl'>About Us</button>
                        </Link>


                    </div>

                </div>
            </div>
        </div>
    )
}

export default Album
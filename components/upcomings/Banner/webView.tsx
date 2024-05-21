import React from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import image1 from 'static/img/watch/fightclub-vlog/web/hero.png';
import image2 from 'static/img/watch/futsal/web/hero.png';
import image3 from 'static/img/watch/hero/heros.jpg';
interface WebProps {

}
const Web: React.FC<WebProps> = () => {
    const images = [image1, image2, image3]
    

    const [currentImage, setCurrentImage] = useState(0)


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((currentImage) => (currentImage + 1) % images.length)
        }, 5000)

        return () => clearInterval(interval)
    }, [])
  

    return (
        <>
            <div className='relative top-0'>
                <div className=''>
                    <div className='bg-auto h-screen w-screen'>
                        { images.map((imagePath, index) => (
                            
                           
                           <Image
                                key={index}
                                src={imagePath}
                                alt={`Background image ${index}`}
                                layout="fill"
                                objectFit="cover"
                                className={
                                    index === currentImage ? 'opacity-100 ease-in duration-300' : 'opacity-0 ease-in duration-300'
                                }
                                
                            />
                        ))}
                    </div>
                </div>

                <div className="flex flex-col absolute inset-0 justify-end items-center mb-20 text-white ">


                    <div className='flex flex-col md:flex-row  mt-7 '>
                        <Link
                            href="/"
                            className=''>
                            <button className='bg-white text-black font-bold py-2 px-4 rounded  cursor-not-allowed"> Button'>Read More</button>
                        </Link>


                    </div>

                </div>
            </div>

        </>
    )
}

export default Web
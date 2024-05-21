
import {useState , useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import image1 from 'static/img/events/anuprastha/mobile/hero.png';
import image2 from 'static/img/events/brijesh-beyond/mobile/hero.png';
import image3 from 'static/img/events/roasted/mobile/hero.png';
import image4 from 'static/img/events/monkey-temple/mobile/hero.png';
import image5 from 'static/img/events/mukti/mobile/hero.png';
import image6 from 'static/img/events/nepal-unites/mobile/hero.png';


interface MobileViewProps {

  }
  
const MobileView: React.FC<MobileViewProps> = () => {

    const images = [image1, image2, image3, image4, image5, image6]

    const [currentImage, setCurrentImage] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((currentImage) => (currentImage + 1) % images.length)
        }, 15000)

        return () => clearInterval(interval)
    }, [])

    return (
        <>
            <div className='relative top-0'>
                <div className='bg-cover h-screen bg-center'>
                    <div className=' min-w-full'>
                    {images.map((imagePath, index) => (
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

export default MobileView
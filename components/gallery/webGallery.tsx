import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image, { StaticImageData } from "next/image";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import event5 from "static/img/events/brijesh-beyond/web/hero.png";
import event6 from "static/img/events/fight-club/web/hero.png";
import event7 from "static/img/events/monkey-temple/web/hero.png";
import event8 from "static/img/events/mukti/web/hero.png";
import event9 from "static/img/events/nepal-unites/web/hero.png";
import event10 from "static/img/events/fight-club/web/hero.png";
import event11 from "assets/img/events/3.png";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";
import { useRouter } from "next/router";

const WebGallery: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
 
  const events = [
    {
      image: event5,
      link: "/events/5",
    },
    {
      image: event6,
      link: "/events/6",
    },
    {
      image: event7,
      link: "/events/7",
    },
    {
      image: event8,
      link: "/events/8",
    },
    {
      image: event9,
      link: "/events/9",
    },
    {
      image: event10,
      link: "/events/10",
    },
    {
      image: event11,
      link: "/events/11",
    },
  ];
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isPaused) {
        setCurrentSlide((prevIndex) =>
          prevIndex === displayedImages.length - 1 ? 0 : prevIndex + 1
        );
      }
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentSlide, isPaused]);

  const displayedImages = [...events, ...events, ...events].slice(
    currentSlide,
    currentSlide + 3
  );

  const handlePrev = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? events.length - 1 : prevSlide - 1
    );
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === events.length - 1 ? 0 : prevSlide + 1
    );
  };
  
  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  

  const videos = [
    {
      src: "/Homedesign.mp4",
      link: "/event/homedesign",
    },
    {
      src: "/Natural.mp4",
      link: "/event/natural",
    },
    {
      src: "https://css-tricks-post-videos.s3.us-east-1.amazonaws.com/Island%20-%204141.mp4",
      link: "/event/island",
    },
    {
      src: "/Homedesign.mp4",
      link: "/event/homedesign",
    },
    {
      src: "/Natural.mp4",
      link: "/event/natural",
    },
    {
      src: "https://css-tricks-post-videos.s3.us-east-1.amazonaws.com/Island%20-%204141.mp4",
      link: "/event/island",
    },
    {
      src: "/Homedesign.mp4",
      link: "/event/homedesign",
    },
    {
      src: "/Natural.mp4",
      link: "/event/natural",
    },
    {
      src: "https://css-tricks-post-videos.s3.us-east-1.amazonaws.com/Island%20-%204141.mp4",
      link: "/event/island",
    },
  ];

  const [activeVideo, setActiveVideo] = useState(null);
  const router = useRouter();

  const handleVideoClick = (link: Url) => {
    router.push(link);
  };
 

  return (
    <>
      <div className="  relative">
        <Slider
          infinite={true}
          slidesToShow={1}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={4000}
          pauseOnHover={false}
          fade={true}
          className="h-[602px]  "
        >
          {events.map((event, index) => (
            <div key={index}>
              <Image
                src={event.image}
                alt={""}
                className="h-[602px] w-[1920px] object-cover "
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="bg-gray-900 relative p-[30px]">
        <div className="flex text-white  md:pl-[38px] md:pr-[45px] justify-between  items-center">
          <div
            className="flex justify-center  items-center
          "
          >
            <img
              src="./Viewimage.png"
              className="md:h-[30px] m-[10px] md:w-[35px] h-[20px] w-[25px]"
            />
            <h1 className="font-semibold md:text-[16px] text-[12px]">
              EVENTS IMAGES
            </h1>
          </div>
          <Link
            href="./gallery/Viewallimage"
            className="md:text-[20px] text-[12px] font-semibold"
          >
            VIEW ALL
          </Link>
        </div>

        <div className="flex space-x-5 p-[20px] pl-[40px] pr-[40px]  ">
          {displayedImages.map((event, index) => (
            <div
              key={index}
              className="hover:scale-125 cursor-pointer overflow-hidden   hover:duration-500  transition duration-700 ease-in-out  "
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              >
              <a href={event.link}>
                <Image
                  src={event.image}
                  className="h-[372px] w-[509px] object-cover  duration-700 "
                  alt={""}
                />
              </a>
            </div>
          ))}

          <div className="absolute  top-[280px]  ">
            <button
              className="bg-slate-300  rounded-full  text-[18px] h-[18px] w-[18px] flex justify-center items-center -translate-x-20    shadow-lg "
              onClick={handlePrev}
            >
              <BiChevronLeft />
            </button>
          </div>
          <div className="absolute top-[280px] -translate-x-5 right-0    ">
            <button
              className="bg-slate-300 rounded-full  text-[18px] h-[18px] w-[18px] flex justify-center items-center   shadow-lg"
              onClick={handleNext}
            >
              <BiChevronRight />
            </button>
          </div>
        </div>

        <div className="    relative">
          <div className="flex text-white  md:pl-[38px] md:pr-[45px] justify-between items-center">
            <div className="flex justify-center items-center">
              {" "}
              <img
                src="./Group.png"
                className="md:h-[30px] m-[15px] md:w-[30px] h-[20px] w-[25px] "
              />
              <h1 className="font-semibold md:text-[16px] text-[12px]">
                VIDEOS
              </h1>
            </div>{" "}
            <Link
              href="./gallery/Viewallvideo"
              className="md:text-[20px] text-[12px] font-semibold"
            >
              VIEW ALL
            </Link>
          </div>

          <Slider
            dots={false}
            infinite={true}
            autoplay={true}
            autoplaySpeed={3000}
            slidesToShow={3}
            slidesToScroll={1}
            className="  "
          >
            {videos.map((video, index) => (
              <div
                className=" px-[35px] hover:transition-all hover:duration-700 duration-500 hover:scale-125"
                key={index}
                onClick={() => handleVideoClick(video.link)}
              >
                <video
                  src={video.src}
                  onMouseOver={(e) => (e.target as HTMLVideoElement).play()}
                  onMouseOut={(e) => (e.target as HTMLVideoElement).pause()}
                  loop={index === activeVideo}
                  muted={index !== activeVideo}
                  className="h-[372px] w-[509px] object-cover"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default WebGallery;

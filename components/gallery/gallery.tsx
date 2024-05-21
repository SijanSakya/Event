import React from "react";
import { useEffect, useState } from "react";
import MobGallery from "./mobGallery";
import WebGallery from "./webGallery";


interface NavbarProps {
}
const Navbar: React.FC<NavbarProps> = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
      const handleResize = () => {
          setIsMobile(window.innerWidth <= 868);
      };
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => {
          window.removeEventListener('resize', handleResize);
      };
  }, []);

  return (
    <div>
      {isMobile ? (
        <MobGallery/>
      ) : (
       <WebGallery/>
      )}

    </div>

  );
};

export default Navbar;


{
  /* <div className="  text-white text-center mt-4 absolute bottom-0 left-[630px] transform -translate-x-1/2">{`Showing event ${
  currentSlide + 1
} of ${events.length}`}</div> */
}

// import React, { useState, useRef } from "react";
// import { BsImageFill } from "react-icons/bs";
// import Slider from "react-slick";
// import Image, { StaticImageData } from "next/image";
// import event1 from "assets/img/events/1.png";
// import event2 from "assets/img/events/2.png";
// import event3 from "assets/img/events/3.png";
// import event4 from "static/img/events/anuprastha/web/hero.png";
// import event5 from "static/img/events/brijesh-beyond/web/hero.png";
// import event6 from "static/img/events/fight-club/web/hero.png";
// import event7 from "static/img/events/monkey-temple/web/hero.png";
// import event8 from "static/img/events/mukti/web/hero.png";
// import event9 from "static/img/events/nepal-unites/web/hero.png";
// import event10 from "static/img/events/fight-club/web/hero.png";
// import event11 from "assets/img/events/3.png";
// import { useRouter } from "next/router";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Link from "next/link";
// import { Url } from "next/dist/shared/lib/router/router";

// const Gallery = () => {
//   const sliderRef = useRef(null);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [hoveredEvent, setHoveredEvent] = useState<StaticImageData | null>(
//     null
//   );

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     beforeChange: (_oldIndex: any, newIndex: React.SetStateAction<number>) => {
//       setCurrentSlide(newIndex);
//     },
//   };

//   const events = [
//     {
//       image: event1,
//       link: "/events/1",
//     },
//     {
//       image: event2,
//       link: "/events/2",
//     },
//     {
//       image: event3,
//       link: "/events/3",
//     },
//     {
//       image: event4,
//       link: "/events/4",
//     },
//     {
//       image: event5,
//       link: "/events/5",
//     },
//     {
//       image: event6,
//       link: "/events/6",
//     },
//     {
//       image: event7,
//       link: "/events/7",
//     },
//     {
//       image: event8,
//       link: "/events/8",
//     },
//     {
//       image: event9,
//       link: "/events/9",
//     },
//     {
//       image: event10,
//       link: "/events/10",
//     },
//     {
//       image: event11,
//       link: "/events/11",
//     },
//   ];

//   const videos = [
//     {
//       src: "/Homedesign.mp4",
//       link: "/event/homedesign",
//     },
//     {
//       src: "/Natural.mp4",
//       link: "/event/natural",
//     },
//     {
//       src: "https://css-tricks-post-videos.s3.us-east-1.amazonaws.com/Island%20-%204141.mp4",
//       link: "/event/island",
//     },
//     {
//       src: "/Homedesign.mp4",
//       link: "/event/homedesign",
//     },
//     {
//       src: "/Natural.mp4",
//       link: "/event/natural",
//     },
//     {
//       src: "https://css-tricks-post-videos.s3.us-east-1.amazonaws.com/Island%20-%204141.mp4",
//       link: "/event/island",
//     },
//     {
//       src: "/Homedesign.mp4",
//       link: "/event/homedesign",
//     },
//     {
//       src: "/Natural.mp4",
//       link: "/event/natural",
//     },
//     {
//       src: "https://css-tricks-post-videos.s3.us-east-1.amazonaws.com/Island%20-%204141.mp4",
//       link: "/event/island",
//     },
//   ];

//   const [activeVideo, setActiveVideo] = useState(null);
//   const router = useRouter();

//   const handleVideoClick = (link: Url) => {
//     router.push(link);
//   };

//   return (
//     <div className="flex flex-col ">
//       <div className="h-300px]  relative">
//         <Slider
//           infinite={true}
//           slidesToShow={1}
//           slidesToScroll={1}
//           autoplay={true}
//           autoplaySpeed={4000}
//           pauseOnHover={false}
//           fade={true}
//           className="h-[300px] "
//         >
//           <div>
//             <Image
//               src={hoveredEvent || event5}
//               alt={""}
//               objectFit="cover"
//               className="h-[300px] w-screen object-cover"
//             />
//           </div>
//           <div>
//             <Image
//               src={hoveredEvent || event6}
//               alt={""}
//               objectFit="cover"
//               className="h-[300px] w-screen object-cover"
//             />
//           </div>
//           <div>
//             <Image
//               src={hoveredEvent || event7}
//               alt={""}
//               objectFit="cover"
//               className="h-[300px] w-screen "
//             />
//           </div>
//         </Slider>
//       </div>
//       <div className="md:p-[35px]   p-[20px] md:space-y-5 bg-gray-900  w-full relative">
//         <div className="flex text-white  md:pl-[38px] md:pr-[45px] justify-between  items-center">
//           <div
//             className="flex justify-center  items-center
//   "
//           >
//             <img
//               src="./Viewimage.png"
//               className="md:h-[30px] m-[10px] md:w-[35px] h-[20px] w-[25px]"
//             />
//             <h1 className="font-semibold md:text-[16px] text-[12px]">
//               EVENTS IMAGES
//             </h1>
//           </div>
//           <Link
//             href="./Viewallimage"
//             className="md:text-[20px] text-[12px] font-semibold"
//           >
//             VIEW ALL
//           </Link>
//         </div>
//         <Slider className="md:px-[38px] " {...settings}>
//           {events.map((event, index) => (
//             <div
//               key={index}
//               className="cursor-pointer h-[372px] w-[509px]  px-[10px] hover:shadow-2xl hover:duration-500 overflow-visible hover:transition-all duration-500  hover:scale-125"
//               onMouseEnter={() => setHoveredEvent(event.image)}
//               onMouseLeave={() => setHoveredEvent(null)}
//             >
//               <a href={event.link}>
//                 <Image
//                   src={event.image}
//                   alt=""
//                   className=" h-[372px] w-[509px] object-cover "
//                 />
//               </a>
//             </div>
//           ))}
//         </Slider>
//       </div>
//       <div className=" md:p-[35px] p-[20px] md:space-y-5 bg-gray-900  w-full relative">
//         <div className="flex text-white  md:pl-[38px] md:pr-[45px] justify-between items-center">
//           <div className="flex justify-center items-center">
//             {" "}
//             <img
//               src="./Group.png"
//               className="md:h-[30px] m-[15px] md:w-[30px] h-[20px] w-[25px] "
//             />
//             <h1 className="font-semibold md:text-[16px] text-[12px]">VIDEOS</h1>
//           </div>{" "}
//           <Link
//             href="./Viewallvideo"
//             className="md:text-[20px] text-[12px] font-semibold"
//           >
//             VIEW ALL
//           </Link>
//         </div>
//         <Slider
//           dots={false}
//           infinite={true}
//           autoplay={true}
//           autoplaySpeed={3000}
//           slidesToShow={3}
//           slidesToScroll={1}
//           className=" md:px-[38px]"
//         >
//           {videos.map((video, index) => (
//             <div
//               className="px-[10px] hover:transition-all hover:duration-700 duration-500 hover:scale-125"
//               key={index}
//               onClick={() => handleVideoClick(video.link)}
//             >
//               <video
//                 src={video.src}
//                 onMouseOver={(e) => (e.target as HTMLVideoElement).play()}
//                 onMouseOut={(e) => (e.target as HTMLVideoElement).pause()}
//                 loop={index === activeVideo}
//                 muted={index !== activeVideo}
//               />
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// };
// export default Gallery;

/* <div className="  text-white text-center mt-4 absolute bottom-0 left-[630px] transform -translate-x-1/2">{`Showing event ${
  currentSlide + 1
} of ${events.length}`}</div> */

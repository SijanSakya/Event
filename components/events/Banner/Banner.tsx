import { useState, useEffect } from "react";
import Link from "next/link";

import MobileView from "./mobileView";
import WebView from "./webViewBanner";

interface EventsProps {}

const Banner: React.FC<EventsProps> = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className="relative top-0">
        <div className="bg-cover h-screen bg-center">
          <div className=" min-w-full">
            {isMobile ? <MobileView /> : <WebView />}
          </div>
        </div>

        <div className="flex flex-col absolute inset-0 justify-end items-center mb-20 text-white ">
          <div className="flex flex-col md:flex-row  mt-7 ">
            <Link href="/" className="">
              <button className='bg-white text-black font-bold py-2 px-4 rounded  cursor-not-allowed"> Button'>
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;

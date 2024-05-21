import React from "react";
import { useState, useEffect } from "react";


import Web from "./webView";
import Mobile from "./mobileView";

interface UpcomingProps {}
const Upcoming: React.FC<UpcomingProps> = () => {
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
        <div className="">
          <div className="bg-auto h-screen w-screen">
            {isMobile ? <Mobile /> : <Web />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Upcoming;

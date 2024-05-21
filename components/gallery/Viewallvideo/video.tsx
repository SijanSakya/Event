import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import eventcollage from "static/img/home/event-collage.png";
import { Url } from "next/dist/shared/lib/router/router";
import ImageVideoButton from "../imageVideoButton";

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

const ViewallVideo = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const router = useRouter();

  const handleVideoClick = (link: Url) => {
    router.push(link);
  };

  return (
    <div className="flex flex-col">
      <div className="h-[250px]">
        <Image src={eventcollage} alt="" className="h-[250px] object-cover" />
      </div>
      <div className=" bg-gray-900">
        <ImageVideoButton />
        <div className=" grid md:grid-cols-4 grid-cols-2 md:px-32 py-4 md:py-8 bg-gray-900 gap-3 p-3 md:gap-10">
          {videos.map((video, index) => (
            <div key={index} onClick={() => handleVideoClick(video.link)}>
              <video
                src={video.src}
                onMouseOver={(e) => (e.target as HTMLVideoElement).play()}
                onMouseOut={(e) => (e.target as HTMLVideoElement).pause()}
                className="h-[302px] w-[509px] object-cover "
                loop={index === activeVideo}
                muted={index !== activeVideo}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewallVideo;

import { useEffect, useRef } from "react";

interface VideoProps {
  videoUrl: string;
}

const Video: React.FC<VideoProps> = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const video = videoRef.current;

      if (video) {
        const videoRect = video.getBoundingClientRect();
        const videoTop = videoRect.top;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (videoTop - scrollTop <= 5) {
          video.play();
        } else {
          video.pause();
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
    <video
      src="https://css-tricks-post-videos.s3.us-east-1.amazonaws.com/Island%20-%204141.mp4"
      ref={videoRef}
      autoPlay
      muted
      loop
      className=" w-screen md:h-screen h-[800px] object-cover "
    />
    </div>
  );
};

export default Video;

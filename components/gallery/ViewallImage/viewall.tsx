import React from "react";
import "slick-carousel/slick/slick.css";
import eventcollage from "static/img/home/event-collage.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import router from "next/router";
import Image from "next/image";
import event1 from "assets/img/events/1.png";
import event2 from "assets/img/events/2.png";
import event3 from "assets/img/events/3.png";
import event4 from "static/img/events/anuprastha/web/hero.png";
import event5 from "static/img/events/brijesh-beyond/web/hero.png";
import event6 from "static/img/events/fight-club/web/hero.png";
import event7 from "static/img/events/monkey-temple/web/hero.png";
import event8 from "static/img/events/mukti/web/hero.png";
import event9 from "static/img/events/nepal-unites/web/hero.png";
import event10 from "static/img/events/fight-club/web/hero.png";
import event11 from "assets/img/events/3.png";
import { Url } from "next/dist/shared/lib/router/router";
import ImageModal from "./modal";
import ImageVideoButton from "../imageVideoButton";
import MobNav from "../../Masterlayout/Navbar/mobNav";

interface Event {
  image: string;
  link: string;
}
const Allimage = () => {
  const events = [
    { image: event1, link: "/event1" },
    { image: event2, link: "/event2" },
    { image: event3, link: "/event3" },
    { image: event4, link: "/event4" },
    { image: event5, link: "/event5" },
    { image: event6, link: "/event6" },
    { image: event7, link: "/event7" },
    { image: event8, link: "/event8" },
    { image: event9, link: "/event9" },
    { image: event10, link: "/event10" },
    { image: event11, link: "/event11" },
    { image: event1, link: "/event1" },
  ];

  return (
    <>
      <div className="flex flex-col">
        <div className="h-[250px] ">
          <Image
            src={eventcollage}
            alt=""
            className="h-[250px]  object-cover"
          />
        </div>
        <div className=" bg-gray-900 ">
          <ImageVideoButton />
          <ImageModal item={events} />
        </div>
      </div>
    </>
  );
};

export default Allimage;

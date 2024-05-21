import React from "react";
import MasterLayout from "../../../components/Masterlayout/Master";
import Upcoming from "../../../components/upcomings/Banner/upcoming";
import UpcomingEvents from "../../../components/upcomings/UpcomingEvents";
import { GetStaticProps } from "next";

interface Slider {
  title: string;
  subtitle?: string;
  image: string;
  mobileHero: string;
}

interface Event {
  title: string;
  subtitle: string;
  image: string;
  thumbnail: string;
  date: string;
  landMark: string;
  location: string;
  link: string;
  slider: Slider;
}

type EventProps = {
  eventList: Event[];
};

const API_URL = "https://localhost:3000/api/eventsDetail/eventsDetails";

// export const getStaticProps: GetStaticProps<EventProps> = async () => {
//   const res = await fetch(API_URL);
//   const data = await res.json();

//   return {
//     props: {
//       eventList: data,
//     },
//   };
// };

const index = ({ eventList }: EventProps) => {
  return (
    <>
      <MasterLayout>
        <Upcoming />
        {/* <UpcomingEvents eventList={eventList} /> using SSR */}
        <UpcomingEvents />
      </MasterLayout>
    </>
  );
};

export default index;

import React from "react";

import EventsList from "../../../components/events/eventsList";
import Banner from "../../../components/events/Banner/Banner";
import MasterLayout from "../../../components/Masterlayout/Master";
import { GetStaticProps } from "next";

 interface Slider {
    title: string;
    subtitle?: string;
    image: string;
    mobileHero: string;
}
export interface Event {
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

const API_URL = "http://localhost:3000/api/eventsDetail/eventsDetails";

// export const getStaticProps: GetStaticProps<EventProps> = async () => {
//     const res = await fetch(API_URL);
//     const data = await res.json();
//     return {
//         props: {
//             eventList: data,
//         },
//     };
// };
  
const index = ({ eventList }: EventProps) => {

    return (
        <>
            <MasterLayout>
                <Banner />
                {/* <EventsList eventList={eventList} /> */}
              <EventsList title={""} subtitle={""} image={""} thumbnail={""} date={""} landMark={""} link={""} slider={{
                    title: "",
                    subtitle: "",
                    image: "",
                    mobileHero: ""
                }} location={""} />
            </MasterLayout>
        </>
    );
};

export default index;
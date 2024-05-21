// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import EventsList from '../../../../data/events';

type Data = {
  name: string
}
interface Event {
  title: string;
  subtitle:string;
  image: string;
  thumbnail: string;
  date: string;
  landMark: string;
  link: string;
  slider: {
    title: string;
    subtitle: string;
    image: string;
    mobileHero: string;
  };
  location: string; // Add the 'location' property
}


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Event[]>
) {

     
 

  res.status(200).json(EventsList);
}

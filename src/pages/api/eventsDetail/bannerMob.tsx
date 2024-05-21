import { NextApiRequest, NextApiResponse } from 'next'

interface ImageData {
  id: number;
  image: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<ImageData[]>) {
  const data: ImageData[] = [
    {
      id: 0,
      image: 'static/img/events/roasted/mobile/hero.png',
    },
    {
      id: 1,
      image: 'static/img/events/anuprastha/mobile/hero.png',
    },
    {
      id: 2,
      image: 'static/img/events/brijesh-beyond/mobile/hero.png',
    },
    {
      id: 3,
      image: 'static/img/events/roasted/mobile/hero.png',
    },
    {
      id: 4,
      image: 'static/img/events/monkey-temple/mobile/hero.png',
    },
    {
      id: 5,
      image: 'static/img/events/mukti/mobile/hero.png',
    },
    {
      id: 6,
      image: 'static/img/events/nepal-unites/mobile/hero.png',
    },
  ];

  res.status(200).json(data);
}

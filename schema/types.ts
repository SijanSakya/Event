export type Data = {
    name: string
  }
 export interface Event {
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
  

  export interface PastEventBanner {
    id : number ;
    image : string ;
  }
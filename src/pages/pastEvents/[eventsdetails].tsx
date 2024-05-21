

import React from 'react'
import Image from 'next/image'
import Router, { useRouter } from 'next/router'
import MasterLayout from '../../../components/Masterlayout/Master'
import Details from '../../../components/events/eventsDetails/details'


interface EventsDetailsprops {
    data: any
}

const API_URL = "http://localhost:3000/api/eventsDetail/eventsDetails";
// export const GetStaticPaths =async() =>{
//     const res = await fetch("http://localhost:3000/api/eventsDetail/eventsDetails")
//     const data = await res.json();

//     const paths =data.map((curElem:any)=>{
//       return {
//         params : { 
//             eventsdetails : curElem.id.toString(),
//          },
//       }
//     })
//     return {
//         paths,
//         fallback:false
//     }
// } 

//   export const getStaticProps =async (context: any) => {
//     const id = context.params.eventsdetails;
//     const res = await fetch(`http://localhost:3000/api/eventsDetail/eventsDetails`)
//     const data = await res.json();

//      return {
//         props :{
//             data,
//         },
//      };
//   };
const Eventsdetails: React.FC<EventsDetailsprops> = () => {
    const router = useRouter()
    const eventId = router.query.eventsdetails
    return (
        <div>
            <div>
                <MasterLayout >
                    {/* <div key={curElement.id}>
                <h1>{curElement.id}</h1>
                <h1>{curElement.id}</h1>
                <h1>{curElement.id}</h1>
            </div> */}
                    <Details />
                </MasterLayout>
            </div>

        </div>
    )
}

export default Eventsdetails
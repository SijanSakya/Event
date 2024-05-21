import UpcomingForm from '../../../components/Adminpanel/Dashboard/UpcomingForm'
import React from 'react'
import Adminlayout from "../../../components/Adminpanel/Adminlayout";

const UpcomingEventForm = () => {
  return (
    
     <div>
     <div className="flex h-screen w-screen  bg-white">
       <Adminlayout title={""} onLogout={function (): void {
         throw new Error("Function not implemented.");
       } } />
            <UpcomingForm />
       
     </div>
   </div>
  )
}

export default UpcomingEventForm
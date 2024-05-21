import React from 'react'
import Adminlayout from "../../../components/Adminpanel/Adminlayout";
import PastEventForm from '../../../components/Adminpanel/Dashboard/PastEventForm';

const EventForm = () => {
  return (
    <div>
      <div className="flex h-screen w-screen">
        <Adminlayout title={""} onLogout={function (): void {
          throw new Error("Function not implemented.");
        } } />
            
            <PastEventForm />
        
      </div>
    </div>
  )
}

export default EventForm
import Adminlayout from "../../../../components/Adminpanel/Adminlayout";
import Pastevents from "./pastevents";
import React from 'react'


const Pasteventspage = () => {
  return (
    <>
      <div className="flex">
        <Adminlayout title={""} onLogout={function (): void {
          throw new Error("Function not implemented.");
        } } />

        <Pastevents />
      </div>
    </>
  );
};
export default Pasteventspage;

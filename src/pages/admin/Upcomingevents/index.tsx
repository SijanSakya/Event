import Adminlayout from "../../../../components/Adminpanel/Adminlayout";
import React from 'react'

import Upcomingevents from "./upcomingevents";

const Upcomingeventspage = () => {
  return (
    <>
      <div className="flex">
        <Adminlayout title={""} onLogout={function (): void {
          throw new Error("Function not implemented.");
        } } />

        <Upcomingevents />
      </div>
    </>
  );
};
export default Upcomingeventspage;

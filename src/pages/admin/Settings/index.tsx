import Adminlayout from "../../../../components/Adminpanel/Adminlayout";
import Settings from "./settings";
import React from 'react'


const Settingspage = () => {
  return (
    <>
      <div className="flex">
        <Adminlayout title={""} onLogout={function (): void {
          throw new Error("Function not implemented.");
        } } />

        <Settings />
      </div>
    </>
  );
};
export default Settingspage;

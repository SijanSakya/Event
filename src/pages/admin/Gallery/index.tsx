import Adminlayout from "../../../../components/Adminpanel/Adminlayout";
import Gallery from "./gallery";
import React from 'react'


const Gallerypage = () => {
  return (
    <>
      <div className="flex">
        <Adminlayout title={""} onLogout={function (): void {
          throw new Error("Function not implemented.");
        } } />

        <Gallery />
      </div>
    </>
  );
};
export default Gallerypage;

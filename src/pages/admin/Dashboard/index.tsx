import React from 'react'
import Adminlayout from "../../../../components/Adminpanel/Adminlayout";
import Dashboard from "../../../../components/Adminpanel/Dashboard/dashboard"




const DashboardMenu = () => {
  return (
    <>
      <div className="flex h-screen w-screen">
        <Adminlayout title={""} onLogout={function (): void {
          throw new Error("Function not implemented.");
        } } />

        <Dashboard />
      </div>
    </>
  );
};
export default DashboardMenu;

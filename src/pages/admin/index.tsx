import Dashboard from "@components/Adminpanel/Dashboard/dashboard";
import Adminlayout from "../../../components/Adminpanel/Adminlayout";
import Login from "./Login";




const Adminpage= ()=> {
    
    return (
        <>      

       <div className="flex h-screen w-screen bg-white">
        <Adminlayout title={""} onLogout={function (): void {
          throw new Error("Function not implemented.");
        } } />

        <Dashboard />
      </div>

     </>
    )
}
export default Adminpage
import {useEffect} from "react";
import Link from "next/link";
import EventDashboard from "./EventsDashboard";
import DashboardData from "../../../data/dashboard";
import { AiOutlinePlus } from 'react-icons/ai'
import { useRouter } from "next/router";




const Dashboard: React.FC = () => {
    const router = useRouter();
    useEffect(() => {
        var browser_id = null;
        if (typeof window !== "undefined") {
            browser_id = localStorage.getItem("save_browser_id");
            if (!browser_id) {
                // 
                router.push("/admin/login");
                
            } else {
                //session clear in 30 min 1800000
                setTimeout(() => {
                    localStorage.removeItem("save_browser_id");
                }, 1800000);
            }
        }
    }, []);

    return (
        <div className="h-full w-full bg-white">
            <div className="h-fit  md:w-[80vw]  p-5 bg-white">
                <div className="flex  justify-between  mb-2">
                    <div className="flex flex-col text-black ">
                        <h1>Good Morning, User </h1>
                        <p className="text-blue-500 ">Dashboard</p>
                    </div>
                    <div className="gap-4 flex ">
                        <Link
                            href="/admin/add-pastEvent"
                            className=''>
                            <button className='flex gap-2 items-center bg-blue-500 uppercase text-white font-bold py-2 px-4 rounded-md  hover:bg-red-600 '>Events  <AiOutlinePlus /></button>
                        </Link>

                        <Link
                            href="/admin/add-event"
                            className=''>
                            <button className='flex gap-2 items-center border uppercase item-center font-bold py-2 px-4 rounded-md  text-blue-500'>Upcoming  <AiOutlinePlus /></button>
                        </Link>

                    </div>
                </div>

                <EventDashboard data={[]} />
                <EventDashboard data={[]} />
            </div>
        </div>
    );
};

export default Dashboard;

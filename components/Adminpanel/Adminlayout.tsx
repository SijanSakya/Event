import React from "react";

import logo from "assets/img/logo.png";
import Image from "next/image";
import { useRouter } from "next/router";

interface AdminlayoutProps {
  title: string;
  onLogout: () => void;
}

const Adminlayout: React.FC<AdminlayoutProps> = () => {
  const router = useRouter();

  const handleInputDashboard = () => {
    if (router.pathname !== "/admin") {
      router.push("/admin");
    }
  };
  const handleInputPast = () => {
    if (router.pathname !== "/admin/pastEvents") {
      router.push("/admin/pastEvents");
    }
  };
  const handleInputUpcoming = () => {
    if (router.pathname !== "/admin/upcomingEvents") {
      router.push("/admin/upcomingEvents");
    }
  };
  const handleInputGallery = () => {
    if (router.pathname !== "/admin/gallery") {
      router.push("/admin/gallery");
    }
  };
  const handleInputSettings = () => {
    if (router.pathname !== "/admin/settings") {
      router.push("/admin/settings");
    }
  };
  const handleImage = () => {

    router.push("/admin");

  };

  return (
    <>
      <div className="bg-white h-full ">
        <div className="h-fit w-[260px] bg-white border-r border-gray-300 p-[10px] flex flex-col gap-[15px] items-center">
          <Image onClick={handleImage} src={logo} alt="icon" height={150} width={150} />

          <div className="h-[350px] w-[240px] text-black flex flex-col justify-center gap-5 items-center p-[10px] ">
            
            <div
              onClick={handleInputDashboard}
              className=  {`h-[60px] w-[170px]  hover:text-red-500 cursor-pointer bg-gray-300 rounded-md text-[15px] font-medium flex justify-center items-center  ${
                router.pathname === "/admin"
                    ? "text-red-500"
                    : ""
            }`}
            >
              Dashboard
            </div>
            <div
              onClick={handleInputPast}
              className={`h-[60px] w-[170px]   hover:text-red-500 cursor-pointer bg-gray-300 rounded-md text-[15px] font-medium flex justify-center items-center   ${
                router.pathname === "/admin/pastEvents"
                    ? "text-red-500"
                    : ""
            }`}
            >
              Past Events
            </div>
            <div
              onClick={handleInputUpcoming}
              className={`h-[60px] w-[170px]  hover:text-red-500 cursor-pointer bg-gray-300 rounded-md text-[15px] font-medium flex justify-center items-center ${
                router.pathname === "/admin/upcomingEvents"
                    ? "text-red-500"
                    : ""
            }`}
            >
              Upcoming Events
            </div>
            <div
              onClick={handleInputGallery}
              className={`h-[60px] w-[170px]  hover:text-red-500 cursor-pointer bg-gray-300 rounded-md text-[15px]  font-medium flex justify-center items-center ${
                router.pathname === "/admin/gallery"
                    ? "text-red-500"
                    : ""
            }`}
            >
              Gallery
            </div>
            <div
              onClick={handleInputSettings}
              className={`h-[60px] w-[170px]  hover:text-red-500 cursor-pointer bg-gray-300 rounded-md text-[15px]  font-medium flex justify-center items-center ${
                router.pathname === "/admin/settings"
                    ? "text-red-500"
                    : ""
            }`}
            >
              Settings
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Adminlayout;

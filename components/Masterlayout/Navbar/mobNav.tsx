import React from "react";
import { useEffect, useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import logo from "assets/img/logo.png";

interface MobNavProps {

}

const MobNav: React.FC<MobNavProps> = () => {
  const [dropdown, setDropdown] = useState(false);

  const showDropdown = () => {
    setDropdown(!dropdown)
  }
  const nav = [
    {
      name: "PastEvent",
      link: "/pastEvents"
    },
    {
      name: "Gallery",
      link: "/gallery"
    },
    {
      name: "Upcomings",
      link: "/upcomings"
    },
    {
      name: "Connect",
      link: "/connect"
    },
  ]

  const connect = [{ name: "Facebook", link: "" }, { name: "Instagram", link: "" }, { name: "Linkedlin", link: "" }, { name: "Youtube", link: "" }, { name: "Email", link: "" }, { name: "Messenger", link: "" }]
  return (
    <>
      <div>
        <nav className="bg-white  text-gray-800 fixed flex z-10 top-0 h-16 justify-center items-center mx-auto">
          <Link
            href="/"
            className=" pl-2 hover:after:absolute hover:after:block hover:after:w-[65px] hover:after:h-1 hover:after:mt-2 hover:after:bg-red-500"
          >
            <Image className=" w-20 h-10 px-0 " src={logo} alt="logo" />
          </Link>
          <ul className="w-screen flex justify-end  px-5 text-2xl inset-0  items-center text-center">
            <li>
              <Link href="/"  >
                <button onClick={showDropdown}
                   >

                  {dropdown ?
                    <div className='flex uppercase items-center '>
                      <p>Menu</p>
                      <FiChevronUp />
                    </div> :
                    <div className='flex uppercase items-center'>
                      <p>Menu</p>
                      <FiChevronDown />
                    </div>
                    }
                </button>
              </Link>
            </li>
            {dropdown &&
              <div className='flex flex-col absolute items-center justify-around gap-1 text-xl font-bold bg-slate-100 top-full right-0 w-full  ' >

                  {nav?.map((nav, index) => (
                <ul key={index} className="flex flex-col items-center text-2xl font-bold gap-2 py-2 ">
                    <li>
                      <Link
                        href={nav.link}
                        className=""
                      >
                        {nav.name}
                      </Link>
                    </li>
                </ul>
                  ))}

                  {connect?.map((socialaccount,index) => (
                <ul key={index} className="flex flex-col items-center text-xl font-bold gap-2 pb-2">
                    <li >
                      <a
                        className="hover:after:h-1 hover:after:bg-red-500 hover:after:w-20 hover:after:absolute hover:after:block"
                        target="_blank"
                        href={socialaccount.link}
                      >{socialaccount.name}</a>
                    </li>
                </ul>
                  ))}
              </div>
            }

          </ul>
        </nav>
      </div>
    </>
  );
};

export default MobNav;

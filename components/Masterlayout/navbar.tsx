import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "assets/img/logo.png";

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = () => {
  const [dropdown, setDropdown] = useState(false);

  function handleScroll() {
    const navbar = document.querySelector("nav");
    if (navbar) {
      const scrollPosition = window.scrollY;
      const bodyWidth = document.body.offsetWidth;

      if (scrollPosition > 100) {
        navbar.style.transition =
          "transform 0.5s ease-in-out, width 0.5s ease-in-out, margin-top 0.2s  ease-in-out";
        navbar.style.marginTop = "0";
        navbar.style.width = `${bodyWidth}px`;
      } else {
        navbar.style.transition = "none";
        navbar.style.transform = "none";
        navbar.style.width = "1130px";
        navbar.style.marginTop = "50px";
      }
    }
  }
  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showDropdown = () => {
    setDropdown(true)
  }
  const hideDropdown = () => {
    setDropdown(false);
  };
  return (
    <div>
      {/* <nav
        className="h-16 bg-white duration-700 flex justify-center fixed top-0 left-0 right-0 m-auto mt-[50px] z-50 rounded-sm"
        onMouseLeave={hideDropdown}
      >
        <ul className="flex items-center justify-around gap-32 text-xl font-bold ">
          <li className="">
            <Link
              href="/pastEvents"
              className="hover:after:absolute hover:text-red-600 hover:after:block hover:after:w-20 hover:after:h-1 hover:after:mt-3  hover:after:bg-red-500"
            >
              Past Event
            </Link>
          </li>
          <li>
            <Link
              href="/gallery"
              className="hover:after:absolute hover:text-red-600  hover:after:block hover:after:w-14 hover:after:h-1 hover:after:mt-3 hover:after:bg-red-500"
            >
              Gallery
            </Link>
          </li>

          <li>
            <Link
              href="/"
              className="hover:after:absolute  "
            >
              <Image className=" w-16 h-9 px-0 " src={logo} alt="logo" />
            </Link>
          </li>
          <li>
            <Link
              href="/upcomings"
              className="hover:after:absolute hover:text-red-600  hover:after:block hover:after:w-20 hover:after:h-1 hover:after:mt-3 hover:after:bg-red-500 "
            >
              Upcomings
            </Link>
          </li>
          <li>
            <Link
              href="/connect"
              className="hover:after:absolute hover:text-red-600  hover:after:block hover:after:w-16 hover:after:h-1 hover:after:mt-3 hover:after:bg-red-500"
              onMouseEnter={showDropdown}
            >
              Connect
            </Link>
          </li>
        </ul>

        <div>
          {dropdown &&
            <div className='' >
              <ul className="h-14 flex absolute  items-center justify-around gap-10 text-xl font-bold bg-slate-100 top-full right-0 md:px-10">
               <li> <a
                  className="hover:after:h-1 hover:after:bg-red-500 hover:after:w-20 hover:after:absolute hover:after:block"
                  target="_blank"
                  href="socialLinks.facebook"
                >Facebook</a>
                                </li>
                <li>
                  <a
                    className="hover:after:h-1 hover:after:bg-red-500 hover:after:w-20 hover:after:absolute hover:after:block"
                    target="_blank"
                    href="socialLinks.instagram"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    className="hover:after:h-1 hover:after:bg-red-500 hover:after:w-16 hover:after:absolute hover:after:block"
                    target="_blank"
                    href="socialLinks.linkedin"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    className="hover:after:h-1 hover:after:bg-red-500 hover:after:w-16 hover:after:absolute hover:after:block"
                    target="_blank"
                    href="socialLinks.youtube"
                  >
                    Youtube
                  </a>
                </li>
                <li>
                  <a
                    className="hover:after:h-1 hover:after:bg-red-500 hover:after:w-11 hover:after:absolute hover:after:block"
                    target="_blank"
                    href="socialLinks.email"
                  >
                    Email
                  </a>
                </li>
                <li>
                  <a
                    className="hover:after:h-1 hover:after:bg-red-500 hover:after:w-20 hover:after:absolute hover:after:block"
                    target="_blank"
                    href="socialLinks.messenger"
                  >
                    Messenger
                  </a>
                </li>
              </ul>
            </div>
          }
        </div>
      </nav> */}

     
    </div>

  );
};

export default Navbar;

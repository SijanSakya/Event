import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "assets/img/logo.png";
import { useRouter } from "next/router";

interface WebNavProps {
    className?: string;
}

const WebNav: React.FC<WebNavProps> = () => {
    const [dropdown, setDropdown] = useState(false);
    const router = useRouter();

    const connect = [
        { name: "Facebook", link: "" },
        { name: "Instagram", link: "" },
        { name: "Linkedlin", link: "" },
        { name: "Youtube", link: "" },
        { name: "Email", link: "" },
        { name: "Messenger", link: "" },
    ];

    function handleScroll() {
        const navbar = document.querySelector("nav");
        if (navbar) {
            const scrollPosition = window.scrollY;
            const bodyWidth = document.body.offsetWidth;

            if (scrollPosition > 100) {
                navbar.style.transition = "transform 0.5s ease-in-out, width 0.5s ease-in-out, margin-top 0.2s  ease-in-out";
                navbar.style.marginTop = "0";
                navbar.style.width = `${bodyWidth}px`;
            } else {
                navbar.style.transition = "transform 0.2s ease-in-out, width 0.2s ease-in-out, margin-top 0.1s  ease-in-out";
                navbar.style.transform = "none";
                navbar.style.width = "1130px";
                navbar.style.marginTop = `${49 - scrollPosition / 2}px`;
            }
        }
    }

    useEffect(() => {
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const showDropdown = () => {
        setDropdown(true);
    };
    const hideDropdown = () => {
        setDropdown(false);
    };

    return (
        <div>
            <nav
                className="h-16 bg-white text-gray-800 duration-700 flex uppercase justify-center fixed top-0 left-0 right-0 m-auto mt-[50px] z-50 rounded-sm shadow-2xl"
                onMouseLeave={hideDropdown}
            >
                <ul className="flex items-center text-black justify-around gap-32 text-base font-bold relative">
                    <li className="relative">
                        <Link
                            href="/pastEvents"
                            className={`hover:after:absolute hover:after:block hover:after:w-full hover:after:h-1 hover:after:mt-4  hover:after:bg-red-500 hover:text-red-500  ${
                                router.pathname === "/pastEvents"
                                    ? "text-red-500"
                                    : ""
                            }`}
                        >
                            Past Events
                            {router.pathname === "/pastEvents" && (
                                <div className="absolute top-10 w-full h-1 -3 bg-red-500 "></div>
                            )}
                        </Link>
                    </li>
                    <li className="relative">
                        <Link
                            href="/gallery"
                            className={`hover:after:absolute hover:after:block hover:after:w-full hover:after:h-1 hover:after:mt-4  hover:after:bg-red-500 hover:text-red-500 ${
                                router.pathname === "/gallery"
                                    ? "text-red-500"
                                    : ""
                            }`}
                        >
                            Gallery
                            {router.pathname === "/gallery" && (
                                <div className="absolute text-red-500 top-10 w-full h-1 -3 bg-red-500 "></div>
                            )}
                        </Link>
                    </li>

                    <li className="relative">
                        <Link href="/">
                            <Image
                                className=" w-16 h-10 px-0 "
                                src={logo}
                                alt="logo"
                            />
                            {router.pathname === "/" && (
                                <div className="absolute top-12 w-full h-1 -3 bg-red-500 "></div>
                            )}
                        </Link>
                    </li>
                    <li className="relative">
                        <Link
                            href="/upcomings"
                            className={`hover:after:absolute hover:after:block hover:after:w-full hover:after:h-1 hover:after:mt-4 hover:after:bg-red-500 hover:text-red-500 ${
                                router.pathname === "/upcomings"
                                    ? "text-red-500"
                                    : ""
                            }`}
                        >
                            Upcoming Events
                            {router.pathname === "/upcomings" && (
                                <div className="absolute top-10 w-full h-1 -3 bg-red-500 "></div>
                            )}
                        </Link>
                    </li>
                    <li className="relative">
                        <Link
                            href="/connect"
                            className={`hover:after:absolute hover:after:block hover:after:w-full hover:after:h-1 hover:after:mt-4 hover:text-red-500 hover:after:bg-red-500 ${
                                router.pathname === "/connect"
                                    ? "text-red-500"
                                    : ""
                            }`}
                            onMouseEnter={showDropdown}
                        >
                            Connect
                            {router.pathname === "/connect" && (
                                <div className="absolute top-10 w-full h-1 -3 bg-red-500 "></div>
                            )}
                        </Link>
                    </li>
                </ul>

                <div>
                    {dropdown && (
                        <div className="">
                            <div className="h-14 flex w-full absolute bg-slate-100  items-center justify-end    font-bold  top-full right-0 md:px-10 text-sm ">
                                <ul className="flex gap-10 text-sm   right-36 justify-end  items-center fixed">
                                    <li className="relative">
                                        <a
                                            className=" hover:text-red-500"
                                            target="_blank"
                                            href="socialLinks.facebook"
                                        >
                                            Facebook
                                        </a>
                                    </li>
                                    <li className="relative">
                                        <a
                                            className=" hover:text-red-500"
                                            target="_blank"
                                            href="socialLinks.instagram"
                                        >
                                            Instagram
                                        </a>
                                    </li>
                                    <li className="relative">
                                        <a
                                            className=" hover:text-red-500"
                                            target="_blank"
                                            href="socialLinks.linkedin"
                                        >
                                            LinkedIn
                                        </a>
                                    </li>
                                    <li className="relative">
                                        <a
                                            className=" hover:text-red-500"
                                            target="_blank"
                                            href="socialLinks.youtube"
                                        >
                                            Youtube
                                        </a>
                                    </li>
                                    <li className="relative">
                                        <a
                                            className=" hover:text-red-500"
                                            target="_blank"
                                            href="socialLinks.email"
                                        >
                                            Email
                                        </a>
                                    </li>
                                    <li className="relative">
                                        <a
                                            className=" hover:text-red-500"
                                            target="_blank"
                                            href="socialLinks.messenger"
                                        >
                                            Messenger
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default WebNav;

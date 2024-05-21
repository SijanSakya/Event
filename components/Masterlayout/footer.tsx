import React from 'react';

import Image from 'next/image'
import logo from 'assets/img/logo-invert.png'
import appleIcon from 'static/img/pages/app-store-icon.png'
import playStoreIcon from 'static/img/pages/play-store-icon.png'

import Link from 'next/link';


interface footerProps {
    className?: string;
}

const Footer: React.FC<footerProps> = () => {


    return (
        <div>

            <footer className=" bg-black border-t border-gray-300 text-white">
                <div className=" px-4 py-8 md:py-12 m-12 md:m-2 flex flex-col justify-around ">
                    <div className="  grid grid-cols-1 md:grid-cols-2 gap-8 md:mx-20 justify-around">
                        <div className="">
                            <Image
                                className="mb-4"
                                src={logo}
                                alt="Positive Vibes's Logo"
                                width={120}
                                height={120}
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2  md:ml-20">
                            <div className="col-span-1 md:px-9 ">
                                
                            </div>
                            <div className="col-span-1 flex flex-col items-start md:items-center">
                                <h3 className=" font-bold uppercase text-xl mb-4 md:pr-16  ">
                             PVE
                                </h3>
                                <ul className="flex flex-col items-start">
                                    
                                    <li>
                                        <Link href="/about-us">
                                            <p className="text-white hover:text-gray-100">About Us</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/faq" className="text-white hover:text-gray-100">
                                            FAQ
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="./Termsofuse">
                                            <p className="text-white hover:text-gray-100">Terms</p>
                                        </Link>
                                    </li>
                                    <li>
                                    <Link href="./privacyPolicies">
                                        <p className="text-white hover:text-gray-100 hover:cursor-pointer">
                                            Privacy Policies
                                        </p>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            {/* <div className="grid grid-cols-1 mt-2 md:ml-8  ">
                                <div className=" flex flex-col mt-3 ">
                                    <div className=" md:mr-8  ">
                                        <p className="mb-4 md:mb-0 text-center md:text-left">
                                            Coming Soon This February 2021.
                                        </p>
                                    </div>
                                    <div className=" mb-4 mt-2 flex justify-center md:justify-center ">
                                        <p className="mr-4">

                                            <Image
                                                className="mb-4"
                                                src={appleIcon}
                                                alt="App Store Icon"
                                                width={150}
                                                height={100}
                                            />
                                        </p>
                                        <p className="mr-4">
                                            
                                            <Image
                                                className="mb-4"
                                                src={playStoreIcon}
                                                alt="App Store Icon"
                                                width={150}
                                                height={100}
                                            />
                                        </p>
                                    </div>
                                </div>
                            </div> */}
                        </div>



                    </div>
                    <div className="grid grid-cols-1 md:mx-20">
                        <div className="col-span-1">
                            <div className=" mt-8">
                                <p className="text-gray-500 text-sm">
                                    Copyright © 2021-2023 PVE NETWORK PVT. LTD
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </div>

    );
};

export default Footer;


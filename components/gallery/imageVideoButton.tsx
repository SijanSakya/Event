
import React, { useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from 'next/router';
import { IoChevronBack } from 'react-icons/io5'
const ImageVideoButton = () => {

  const router = useRouter();

  return (
    <>
      <div className="h-full w-full">
        <div className="text-white md:ml-20 ml-5 flex gap-5 pt-5 text-sm md:text-xl items-center uppercase">
          <Link href="../gallery" className={` font-semibold hover:text-red-400  ${router.pathname === '/gallery' ? 'text-red-500' : ''}`}><IoChevronBack /></Link>
          <Link href="./Viewallimage" className={` font-semibold hover:text-red-400  ${router.pathname === '/gallery/Viewallimage' ? 'text-red-500' : ''}`}>Image</Link>
          <p className="">|</p>
          <Link href="./Viewallvideo" className={` font-semibold hover:text-red-400  ${router.pathname === '/gallery/Viewallvideo' ? 'text-red-500' : ''}`}>Video </Link>
        </div>
      </div>

    </>
  );
};
export default ImageVideoButton;

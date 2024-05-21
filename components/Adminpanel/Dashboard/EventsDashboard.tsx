import React from "react";
import { useState, useEffect } from 'react'

import Link from "next/link";
import DashboardData from "../../../data/dashboard";


interface DashboardData {
    EventId: number
    EventName: string
    XXX: string
    XXXX: string
    XXXXX: string
}
interface EventDashboardProps {
    data: DashboardData[];
}

const EventDashboard: React.FC<EventDashboardProps> = ({ data }) => {


    const [currentIndex, setCurrentIndex] = useState(0);
    const [startIndex, setStartIndex] = useState(0);
    const [numButtons, setNumButtons] = useState(1);

    useEffect(() => {
        const dataLength = data.length;
        const buttonsToShow = Math.ceil(dataLength / 5);
        setNumButtons(buttonsToShow);
    }, [data]);
    // console.log("data",data)
    const buttons = [
        { id: 1, label: 'Button 1' },
        { id: 2, label: 'Button 2' },
        { id: 3, label: 'Button 3' },
        { id: 4, label: 'Button 4' },
        { id: 5, label: 'Button 5' },
        { id: 6, label: 'Button 5' },
        { id: 7, label: 'Button 5' },
        { id: 8, label: 'Button 5' },
    ];

    const displayedButtons = buttons.slice(startIndex, startIndex + 3);

    const handleNextClick = () => {
        if (startIndex < 5) {
            setStartIndex(startIndex + 1);
        }
    }

    const handlePrevClick = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    }

    const totaldata = 6


    const handleButton = () => {
        if (currentIndex <= totaldata / 5) {
            setCurrentIndex(currentIndex + 5);
        }

    };
    return (
        <div className="">

            <div className="flex flex-col border rounded-sm">
                <div className="flex justify-center text-xl items-center py-3 border-b text-black">
                    <h1>Events</h1>

                </div>
                <div className="table px-3">
                    <table className="table divide divide-y text-black">
                        <thead>
                            <tr>

                                <th className="px-4 py-2">Event ID</th>
                                <th className="px-4 py-2">Event Name</th>
                                <th className="px-4 py-2">XXX3</th>
                                <th className="px-4 py-2">XXX4</th>
                                <th className="px-4 py-2">XXX5</th>
                            </tr>
                        </thead>
                        <tbody>
                            {DashboardData?.slice(currentIndex, currentIndex + 5).map((data, index) => (
                                <tr className="border-b" key={index}>
                                    <td className=" px-4 py-2">{data.EventId}</td>
                                    <td className=" px-4 py-2">{data.EventName} </td>
                                    <td className=" px-4 py-2">{data.XXX} </td>
                                    <td className=" px-4 py-2">{data.XXXX} </td>
                                    <td className=" px-4 py-2">{data.XXXXX} </td>
                                </tr>
                            ))}


                        </tbody>
                    </table>

                    <div className="flex justify-end py-2 px-4 ">
                        <div className="flex gap-1 text-center items-center text-xs">
                            <Link href="" onClick={handlePrevClick} >Previous</Link>
                            {displayedButtons.map(button => (
                                <Link key={button.id} href=''>
                                    <button onClick={handleButton} className="border uppercase item-center font-bold py-2 px-3 rounded-md text-xs bg-blue-500 text-white">{button.id}</button></Link>
                            ))}
                            {/* {Array(numButtons).fill("").map((_, i) => (
                               <Link href=""> <button className="border uppercase item-center font-bold py-2 px-4 rounded-md lg:text-xl text-sm bg-blue-500 text-white" key={i}>{i + 1}</button> </Link>
                            ))} */}
                            

                            <Link href="" onClick={handleNextClick} >Next</Link>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default EventDashboard;
'use client'
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa"
import { useRef, useState } from "react"
import data from "@/data"
export default function Trainers() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [scrollPosition, setScrollPosition] = useState(0);

    const scrollLeft = () => {
        if (containerRef.current) {
            containerRef.current.scrollLeft -= 100;
            setScrollPosition(containerRef.current.scrollLeft);
        }
    };

    const scrollRight = () => {
        if (containerRef.current) {
            containerRef.current.scrollLeft += 100;
            setScrollPosition(containerRef.current.scrollLeft);
        }
    };
    return (
        <div className="w-full flex flex-col py-10" id="trainers">
            <div className="flex justify-between items-center pt-10 xl:px-32 lg:px-28 md:px-8 px-3">
                <h1 className="text-3xl">Trainers</h1>
                <div className="flex gap-6">
                    <Button onClick={scrollLeft}><FaArrowLeft /></Button><Button onClick={scrollRight}><FaArrowRight /></Button>
                </div>
            </div>
            <div className="w-full h-[480px] flex justify-start items-center overflow-x-scroll overflow-y-hidden no-scrollbar" ref={containerRef}>
                <div className="flex gap-8 flex-nowrap xl:px-26 lg:px-28 md:px-8 px-3 myElement">
                    {data.map((item) => {
                        return (
                            <Link href={`/trainers/${item.id}`} key={item.id} className="cursor-pointer hover:scale-110 transition-all duration-500 ease-in-out">
                            <div className=" w-64 h-[500px] flex flex-col gap-5 ml-3 rounded-xl p-3">
                                <div className="flex relative -bottom-[60px] rounded-tl-xl bg-black text-white dark:bg-white dark:text-black py-2 w-1/5 items-center justify-center gap-1">
                                    <h1 className="">{item.rate}</h1>
                                    <FaStar className="text-yellow-300" />
                                </div>
                                <Image src={item.image} alt="trainer image" width={300} height={300} className="rounded-3xl w-[300px] h-[400px] shadow-lg shadow-green-400"/>
                                <h1 className="relative -top-[60px] bg-black text-white dark:bg-white rounded-bl-3xl dark:text-black px-3 py-2 w-2/5 text-center font-medium">{item.name}</h1>
                            </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
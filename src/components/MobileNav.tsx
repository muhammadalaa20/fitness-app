'use client';
import Link from "next/link";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { RiMenu4Line } from "react-icons/ri";
import { FaSun, FaMoon } from "react-icons/fa";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
export default function MobileNav() {
    const [darkMode, setDarkMode] = useState(true);
    useEffect(() => {
        const theme = localStorage.getItem("theme");
        if (theme === "dark") {
            setDarkMode(true);
        } else {
            setDarkMode(false);
        }
    }, []);
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);
    return (
        <div className="w-full flex justify-between items-center p-4">
            <Link className="text-3xl font-bold" href="/">WORKOUT</Link>
            <Sheet>
                <SheetTrigger><RiMenu4Line size={20} className="text-blue-200" /></SheetTrigger>
                <SheetContent>
                    <Button variant={"outline"} onClick={() => setDarkMode(!darkMode)}>{darkMode === true ? <FaMoon size={20} className="text-blue-200" /> : <FaSun size={20} className="text-yellow-200" />}</Button>
                    <SheetHeader className="text-center pt-10">
                        <SheetTitle className="text-3xl text-center pb-10">WORKOUT</SheetTitle>
                        <div className="flex flex-col gap-8 justify-center items-center dark:text-white">
                            <Link href="/Exercises" className="nav--link">EXERCISES</Link>
                            <Link href="#trainers" className="nav--link">TRAINERS</Link>
                            <Link href="#pricing" className="nav--link">PRICING</Link>
                            <Link href="/" className="nav--link">LOGIN</Link>
                        </div>
                    </SheetHeader>
                </SheetContent>
            </Sheet>

        </div>
    );
}
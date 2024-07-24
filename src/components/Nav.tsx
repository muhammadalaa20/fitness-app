'use client'
import { FaSun, FaMoon } from "react-icons/fa";
import Link from "next/link";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
export default function Nav() {
    const [darkMode, setDarkMode] = useState(true);
    useEffect(() => {
        const theme = localStorage.getItem("theme");
        if (theme === "dark") {
            setDarkMode(true);
        } else {
            setDarkMode(false);
        }
    } , []);
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
            <div className="flex gap-8 items-center">
                <Button variant={"outline"} onClick={()=>setDarkMode(!darkMode)}>{ darkMode === true ? <FaMoon size={20} className="text-blue-200"/> : <FaSun size={20} className="text-yellow-200"/>}</Button>
                <Link href="/Exercises" className="nav--link">EXERCISES</Link>
                <Link href="#trainers" className="nav--link">TRAINERS</Link>
                <Link href="#pricing" className="nav--link">PRICING</Link>
                <Link href="/" className="nav--link">LOGIN</Link>
            </div>
        </div>
    );
}
'use client'
import { ChangeEvent, useState } from "react"
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function Footer() {
    const [formData, setFormData] = useState(
        {
            email: "",
        }
    )
    function handleChange({event} : {event: ChangeEvent<HTMLInputElement>} ) {
        const { name, value, type, checked } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    function handleSubmit({event} : {event: ChangeEvent<HTMLFormElement>} ) {
        event.preventDefault()
        console.log(formData)
    }
    return(
        <footer className="footer dark:bg-black">
            <div className="xl:px-8 lg:px-8 px-4 xl:pt-10 lg:pt-10 xl:pb-16 lg:pb-36 py-20">
            <div className="footer-content border flex flex-col gap-16 xl:flex-row lg:flex-row rounded-[26px] px-5 py-10 xl:px-10 lg:px-10 xl:py-16 lg:py-16  justify-between items-center relative xl:-bottom-[180px] lg:-bottom-[240px] -bottom-[180px] bg-white">
                <h1 className="text-4xl xl:text-6xl lg:text-6xl mb-5 text-gray-500">Our Newsletter</h1>
                <form onSubmit={handleSubmit} className="flex flex-col xl:flex-row lg:flex-row gap-8 justify-center xl:items-end lg:items-end items-start">
                    <div>
                    <label htmlFor="email" className="block pb-4">Email</label>
                    <input type="text" 
                    placeholder="Enter your email"
                    name="email"
                    id="email"
                    onChange={handleChange}
                    className="input bg-[#d6f8c0] placeholder-primary xl:px-10 lg:px-10 px-5 py-4 rounded-2xl"
                    value={formData.email}
                    />
                    </div>
                    <button type="submit" className="py-4 xl:px-10 lg:px-10 px-5 rounded-2xl text-white bg-primary">Subscribe</button>
                </form>
            </div>
            </div>
            <div className="bg-black flex flex-col xl:items-start lg:items-start items-start     xl:flex-row lg:flex-row pt-60 text-white justify-between px-8 pb-36 xl:gap-0 lg:gap-0 gap-8">
                <div className="">
                    <h1 className="text-2xl pb-3">WORKOUT</h1>
                    <p className="text-gray-500">Copyright ©WORKOUT 2024 All rights reserved</p>
                </div>
                <div className="">
                    <h1 className="text-2xl pb-3">Menu</h1>
                    <ul className="flex flex-col gap-3 text-white">
                        <li><Link href="#home" className="hover:text-primary text-gray-500">Home</Link></li>
                        <li><Link href="/Exercises" className="hover:text-primary text-gray-500">Exercises</Link></li>
                        <li><Link href="#trainers" className="hover:text-primary text-gray-500">Trainers</Link></li>
                        <li><Link href="/Pricing" className="hover:text-primary text-gray-500">Pricing</Link></li>
                    </ul>
                </div>
                <div className="">
                <h1 className="text-2xl pb-3">Information</h1>
                    <ul className="flex flex-col gap-3 ">
                        <li><a href="#Destinations" className="hover:text-primary text-gray-500">Destinations</a></li>
                        <li><a href="#Supports" className="hover:text-primary text-gray-500">Supports</a></li>
                        <li><a href="#Terms" className="hover:text-primary text-gray-500">Terms & Conditions</a></li>
                        <li><a href="#Privacy" className="hover:text-primary text-gray-500">Privacy</a></li>
                    </ul>
                </div>
                <div className="flex flex-col gap-3 ">
                    <h1 className="text-2xl">Contact Info</h1>
                    <h5 className="text-gray-500">+123 456 789</h5>
                    <h5 className="text-gray-500">9qY9Y@example.com</h5>
                    <h5 className="text-gray-500">123 Street, City, Country</h5>
                </div>
                <div className="flex flex-col gap-3">
                    <h1 className="text-2xl">Follow Us On</h1>
                    <div className="flex gap-3 items-center justify-center">
                    <FaFacebook className="text-blue-600"/>
                    <FaInstagram className="text-orange-600"/>
                    <FaTwitter className="text-blue-400"/>
                    </div>
                </div>
            </div>
        </footer>
    )
}
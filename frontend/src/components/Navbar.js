import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {

    document.addEventListener("DOMContentLoaded", function () {
        const navLinks = document.querySelectorAll("#nav-links")
        document.addEventListener("click", () => {
            navLinks.classList.add('text-orange-400')
        })

    });

    return (
        <>
            <nav className="w-full bg-gray-800 h-20 text-white flex items-center justify-between z-50 fixed  ">
                <div className="px-16 ">
                    <h1 className="font-bold text-2xl cursor-pointer italic">Quick Bite</h1>
                </div>
                <div className="relative font-semibold text-lg ">
                    <ul className="flex space-x-7 " id='nav-links' >
                        <li className=" cursor-pointer  "><Link to="/">HOME</Link></li>
                        <li className=" cursor-pointer "><Link to="/menu">MENU</Link></li>
                        <li className=" cursor-pointer "><Link to="/about">ABOUT</Link></li>
                        <li className=" cursor-pointer "><a href="http://localhost:5000/bookTable">BOOK TABLE</a></li>
                        <li className=" cursor-pointer "><a href="http://localhost:5000/allbookings">ALL BOOKINGS</a></li>

                    </ul>

                </div>
                <div
                    className="p-4 mx-10 font-semibold bg-orange-400 rounded-2xl w-28 h-8 flex justify-center items-center hover:bg-orange-600 cursor-pointer">
                    LOGIN
                </div>
            </nav>
        </>
    )
}

export default Navbar
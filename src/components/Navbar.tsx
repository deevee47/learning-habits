import Image from "next/image";
import React from "react";

const Navbar = () => {
    return (
        <nav className="bg-black/40 p-4 backdrop-blur-lg rounded-xl sticky top-7 text-white z-50 w-[70%] mx-auto">
            <div className="container mx-auto flex items-center justify-between text-center">
                <div className="text-white text-2xl font-bold">
                    <Image src="/logo.png" width={250} height={250} alt="Logo" />
                </div>
                <ul className="flex space-x-6 items-center">
                    <li>
                        <a href="/" className="text-white hover:underline">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/about" className="text-white hover:underline">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="/services" className="text-white hover:underline">
                            Services
                        </a>
                    </li>
                    <li>
                        <a href="/contact" className="text-white hover:underline">
                            <button className="border-cyan-600 border-2 py-2 px-5 rounded-lg hover-cyan-600 hover:text-white hover:bg-cyan-600 text-cyan-600 transition ease-in ">Contact</button>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

import React from "react";
import Link from "next/link";


export default function Navbar() {
    return (
        <>
            <header>
                <div className="static flex flex-row items-center justify-center p-4 m-4 bg-orange-300">
                    <ul className="flex">
                        <li><Link href="/" className="m-4">Home</Link></li>
                        <li><Link href="/about" className="m-4">About Us</Link></li>
                        <li><Link href="/projects" className="m-4">Projects</Link></li>
                        <li><Link href="/contact" className="m-4 ">Contact</Link></li>
                    </ul>
                    
                </div>
            </header>
        </>
    )
}
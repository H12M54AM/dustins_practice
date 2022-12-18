import React from "react";
import Link from "next/link";


export default function Navbar() {
    return (
        <>
            <header>
                <div className="flex flex-row justify-center bg-orange-300">
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/projects">Projects</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>
            </header>
        </>
    )
}
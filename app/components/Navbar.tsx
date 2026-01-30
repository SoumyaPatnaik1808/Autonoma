"use client";

import Link from "next/link";


export default function Navbar() {
    return (
        <nav className="fixed top-0 z-50 w-full glass-nav transition-all duration-300">
            <div className="container mx-auto flex h-20 items-center justify-between px-6 md:px-12">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">

                    <span className="text-xl font-bold tracking-tight">Autonoma</span>
                </Link>

                {/* Links */}
                <div className="hidden gap-10 text-sm font-medium text-zinc-600 dark:text-zinc-300 md:flex">
                    <Link href="#product" className="hover:text-purple-500 dark:hover:text-purple-400 transition-colors">Product</Link>
                    <Link href="#features" className="hover:text-purple-500 dark:hover:text-purple-400 transition-colors">Features</Link>
                    <Link href="#pricing" className="hover:text-purple-500 dark:hover:text-purple-400 transition-colors">Pricing</Link>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-6">

                    <Link
                        href="#"
                        className="hidden rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-black hover:bg-zinc-200 dark:bg-white dark:text-black dark:hover:bg-zinc-200 transition-all hover:scale-105 md:block shadow-[0_0_15px_-3px_rgba(255,255,255,0.3)]"
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </nav>
    );
}

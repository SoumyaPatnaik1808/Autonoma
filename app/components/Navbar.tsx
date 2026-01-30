"use client";

import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

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
                    <SignedOut>
                        <Link
                            href="/sign-in"
                            className="hidden rounded-full bg-white px-6 py-2.5 text-sm font-bold text-black hover:bg-zinc-200 dark:bg-white dark:text-black dark:hover:bg-zinc-200 transition-all hover:scale-105 md:block shadow-[0_0_15px_-3px_rgba(255,255,255,0.3)]"
                        >
                            Login
                        </Link>
                        <Link
                            href="/sign-up"
                            className="hidden rounded-full border border-white/20 bg-white/5 px-6 py-2.5 text-sm font-bold text-white hover:bg-white/10 transition-all hover:scale-105 md:block backdrop-blur-sm"
                        >
                            Sign Up
                        </Link>
                    </SignedOut>

                    <SignedIn>
                        <Link
                            href="/dashboard"
                            className="hidden rounded-full font-medium text-sm text-zinc-300 hover:text-white transition-colors md:block px-4"
                        >
                            Dashboard
                        </Link>
                        <UserButton
                            appearance={{
                                elements: {
                                    avatarBox: "h-10 w-10 border border-white/20"
                                }
                            }}
                        />
                    </SignedIn>
                </div>
            </div>
        </nav>
    );
}

"use client";

import { UserButton } from "@clerk/nextjs";
import { Menu } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

interface DashboardHeaderProps {
    onMenuClick?: () => void;
}

export default function DashboardHeader({ onMenuClick }: DashboardHeaderProps) {
    return (
        <header className="flex items-center justify-between px-4 md:px-8 py-6 h-20 sticky top-0 z-10">
            {/* Hamburger Menu - Mobile Only */}
            <button
                onClick={onMenuClick}
                className="md:hidden p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-white/10 transition-colors text-zinc-900 dark:text-white"
            >
                <Menu size={24} />
            </button>

            {/* Right Side - Theme Toggle & User Button */}
            <div className="flex items-center gap-4 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md rounded-full px-4 py-2 border border-zinc-200 dark:border-white/5 ml-auto">
                <ThemeToggle />
                <div className="w-px h-6 bg-zinc-200 dark:bg-white/10 mx-1" />
                <UserButton
                    appearance={{
                        elements: {
                            avatarBox: "w-8 h-8",
                            userButtonPopoverCard: "bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 shadow-xl",
                            userButtonPopoverFooter: "hidden"
                        }
                    }}
                />
            </div>
        </header>
    );
}

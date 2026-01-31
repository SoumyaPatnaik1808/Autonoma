"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
    LayoutList,
    Video,
    BookOpen,
    CreditCard,
    Settings,
    Sparkles,
    User,
    Plus,
    X
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
    { name: "Series", icon: LayoutList, href: "/dashboard/series" },
    { name: "Videos", icon: Video, href: "/dashboard/videos" },
    { name: "Guides", icon: BookOpen, href: "/dashboard/guides" },
    { name: "Billing", icon: CreditCard, href: "/dashboard/billing" },
    { name: "Settings", icon: Settings, href: "/dashboard/settings" },
];

interface DashboardSidebarProps {
    isOpen?: boolean;
    onClose?: () => void;
}

export default function DashboardSidebar({ isOpen = false, onClose }: DashboardSidebarProps) {
    return (
        <>
            {/* Mobile Backdrop */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
                    />
                )}
            </AnimatePresence>

            {/* Sidebar */}
            <motion.aside
                initial={{ x: -20, opacity: 0 }}
                animate={{
                    x: 0,
                    opacity: 1
                }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className={`
                    w-80 h-screen flex flex-col bg-white dark:bg-black backdrop-blur-xl border-r border-zinc-200 dark:border-zinc-800 p-6
                    fixed md:sticky top-0 z-50
                    ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0
                `}
            >
                {/* Mobile Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-white/10 transition-colors md:hidden text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white"
                >
                    <X size={20} />
                </button>

                {/* Header / Brand */}
                <div className="mb-10 px-2">
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-cyan-600 dark:from-violet-400 dark:to-cyan-400 bg-clip-text text-transparent">
                        Autonoma
                    </h1>
                </div>

                {/* Primary Action */}
                <button className="flex items-center justify-center gap-2 w-full py-4 mb-8 bg-black dark:bg-white hover:bg-zinc-800 dark:hover:bg-zinc-100 text-white dark:text-black rounded-2xl font-semibold transition-all hover:scale-[1.02] shadow-lg">
                    <Plus size={20} />
                    Create new series
                </button>

                {/* Navigation */}
                <nav className="flex-1 space-y-2">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href="#" // Using # for now as these routes likely don't exist yet
                            className="flex items-center gap-3 px-4 py-4 rounded-xl text-zinc-700 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/5 transition-all group"
                            onClick={onClose}
                        >
                            <item.icon className="w-5 h-5 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors" />
                            <span className="font-medium text-lg">{item.name}</span>
                        </Link>
                    ))}
                </nav>

                {/* Footer Actions */}
                <div className="mt-auto space-y-2 pt-6 border-t border-zinc-200 dark:border-white/5">
                    <button className="w-full flex items-center gap-3 px-4 py-3 text-zinc-700 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/5 rounded-xl transition-all">

                        <span className="font-medium">Upgrade Plan</span>
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-3 text-zinc-700 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/5 rounded-xl transition-all">
                        <User className="w-5 h-5" />
                        <span className="font-medium">Profile Settings</span>
                    </button>
                </div>
            </motion.aside>
        </>
    );
}

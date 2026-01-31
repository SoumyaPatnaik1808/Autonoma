"use client";

import { useState } from "react";
import DashboardHeader from "./components/DashboardHeader";
import DashboardSidebar from "./components/DashboardSidebar";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

    return (
        <div className="flex min-h-screen bg-background text-foreground transition-colors duration-300">
            <DashboardSidebar
                isOpen={isMobileSidebarOpen}
                onClose={() => setIsMobileSidebarOpen(false)}
            />
            <main className="flex-1 flex flex-col relative w-full overflow-hidden">
                <DashboardHeader onMenuClick={() => setIsMobileSidebarOpen(true)} />
                <div className="flex-1 px-4 md:px-8 pb-8 overflow-y-auto h-[calc(100vh-5rem)]">
                    {children}
                </div>
            </main>
        </div>
    );
}

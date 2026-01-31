"use client";

import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { supabase } from "../utils/supabase/client";
import CreateAgentModal from "./components/CreateAgentModal";
import { Plus } from "lucide-react";

export default function DashboardPage() {
    const { user, isLoaded } = useUser();
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [refreshTrigger, setRefreshTrigger] = useState(0);

    useEffect(() => {
        if (isLoaded && user) {
            const syncUser = async () => {
                try {
                    const { error } = await supabase
                        .from('users')
                        .upsert({
                            id: user.id,
                            email: user.primaryEmailAddress?.emailAddress,
                            full_name: user.fullName,
                            updated_at: new Date().toISOString(),
                        }, { onConflict: 'id' });

                    if (error) console.error('Supabase Sync Error:', error.message);
                } catch (err) {
                    console.error('Sync failed:', err);
                } finally {
                    setLoading(false);
                }
            };

            syncUser();
        }
    }, [isLoaded, user]);

    if (!isLoaded || loading) {
        return <div className="flex min-h-screen items-center justify-center text-zinc-900 dark:text-white">Loading Dashboard...</div>;
    }

    return (

        <div className="text-zinc-900 dark:text-white max-w-7xl mx-auto py-4">
            <div className="mb-8 flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-black dark:text-white">
                        Welcome, {user?.firstName || "Creator"}
                    </h1>

                    <p className="mt-2 text-zinc-800 dark:text-zinc-400">
                        Your workspace is ready.
                    </p>
                </div>
                <button

                    className="flex items-center gap-2 rounded-full bg-zinc-900 dark:bg-white px-5 py-2.5 text-sm font-bold text-white dark:text-black transition-transform hover:scale-105 w-full md:w-auto justify-center"
                >
                    <Plus size={18} />
                    Create New Series
                </button>
            </div>



            <CreateAgentModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onAgentCreated={() => setRefreshTrigger(prev => prev + 1)}
            />
        </div>
    );
}


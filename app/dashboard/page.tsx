"use client";

import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { supabase } from "../utils/supabase/client";
import AgentList from "./components/AgentList";
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
        return <div className="flex min-h-screen items-center justify-center text-white">Loading Dashboard...</div>;
    }

    return (
        <div className="min-h-screen bg-black pt-24 text-white">
            <div className="container mx-auto px-6">
                <div className="mb-8 flex items-end justify-between">
                    <div>
                        <h1 className="text-3xl font-bold">Welcome, {user?.firstName || 'Creator'}</h1>
                        <p className="mt-2 text-zinc-400">Your agentic workspace is ready.</p>
                    </div>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="hidden md:flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-black transition-transform hover:scale-105"
                    >
                        <Plus size={18} />
                        Create Agent
                    </button>
                </div>

                <div className="mt-8">
                    <h2 className="mb-6 text-xl font-semibold text-white/90">Your Agents</h2>
                    <AgentList
                        refreshTrigger={refreshTrigger}
                        onCreateClick={() => setIsModalOpen(true)}
                    />
                </div>

                <CreateAgentModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onAgentCreated={() => setRefreshTrigger(prev => prev + 1)}
                />
            </div>
        </div>
    );
}

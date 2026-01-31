"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../utils/supabase/client";
import { useUser } from "@clerk/nextjs";
import { Bot, Plus } from "lucide-react";

interface Agent {
    id: string;
    name: string;
    niche: string;
    tone: string;
    created_at: string;
}

interface AgentListProps {
    refreshTrigger: number;
    onCreateClick: () => void;
}

export default function AgentList({ refreshTrigger, onCreateClick }: AgentListProps) {
    const { user } = useUser();
    const [agents, setAgents] = useState<Agent[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user) return;

        const fetchAgents = async () => {
            try {
                const { data, error } = await supabase
                    .from("agents")
                    .select("*")
                    .eq("user_id", user.id)
                    .order("created_at", { ascending: false });

                if (error) throw error;
                setAgents(data || []);
            } catch (error) {
                console.error("Error fetching agents:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchAgents();
    }, [user, refreshTrigger]);

    if (loading) return <div className="text-zinc-500 dark:text-zinc-500">Loading agents...</div>;

    if (agents.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-zinc-300 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900/30 p-12 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-zinc-200 dark:bg-zinc-800/50 text-zinc-400 dark:text-zinc-500">
                    <Bot size={32} />
                </div>
                <h3 className="text-lg font-medium text-zinc-900 dark:text-white">No Agents Deployed</h3>
                <p className="mt-2 mb-6 max-w-sm text-sm text-zinc-500 dark:text-zinc-400">
                    Create your first autonomous agent to start generating niche-specific content.
                </p>
                <button
                    onClick={onCreateClick}
                    className="flex items-center gap-2 rounded-full bg-zinc-900 dark:bg-white px-6 py-2.5 text-sm font-bold text-white dark:text-black transition-transform hover:scale-105"
                >
                    <Plus size={18} />
                    Create New Agent
                </button>
            </div>
        );
    }

    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Create New Card */}
            <button
                onClick={onCreateClick}
                className="group flex h-full min-h-[180px] flex-col items-center justify-center rounded-2xl border border-dashed border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-900/20 p-6 transition-colors hover:border-purple-500/50 hover:bg-zinc-200 dark:hover:bg-zinc-900/50"
            >
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 group-hover:bg-purple-500/10 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    <Plus size={24} />
                </div>
                <span className="font-medium text-zinc-500 dark:text-zinc-400 group-hover:text-purple-600 dark:group-hover:text-purple-300">New Agent</span>
            </button>

            {/* Agent Cards */}
            {agents.map((agent) => (
                <div
                    key={agent.id}
                    className="group relative overflow-hidden rounded-2xl border border-zinc-200 dark:border-white/5 bg-white dark:bg-zinc-900/50 p-6 transition-all hover:border-purple-500/30 hover:bg-zinc-50 dark:hover:bg-zinc-900/80 shadow-sm dark:shadow-none"
                >
                    <div className="absolute top-0 right-0 h-24 w-24 bg-purple-500/10 blur-2xl transition-opacity group-hover:opacity-100 opacity-0" />

                    <div className="relative z-10">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-zinc-200 to-zinc-300 dark:from-zinc-800 dark:to-zinc-900 text-zinc-700 dark:text-white border border-zinc-300 dark:border-white/5 shadow-inner">
                            <Bot size={24} />
                        </div>

                        <h3 className="text-xl font-bold text-zinc-900 dark:text-white">{agent.name}</h3>
                        <div className="mt-2 flex flex-wrap gap-2">
                            <span className="inline-flex items-center rounded-full bg-purple-500/10 px-2.5 py-0.5 text-xs font-medium text-purple-600 dark:text-purple-400 border border-purple-500/20">
                                {agent.niche}
                            </span>
                            <span className="inline-flex items-center rounded-full bg-cyan-500/10 px-2.5 py-0.5 text-xs font-medium text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                                {agent.tone}
                            </span>
                        </div>

                        <p className="mt-4 text-xs text-zinc-500 dark:text-zinc-500">
                            Deployed {new Date(agent.created_at).toLocaleDateString()}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

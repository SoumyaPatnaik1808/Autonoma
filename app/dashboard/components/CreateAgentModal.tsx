"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles } from "lucide-react";
import { supabase } from "../../utils/supabase/client";
import { useUser } from "@clerk/nextjs";

interface CreateAgentModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAgentCreated: () => void;
}

export default function CreateAgentModal({ isOpen, onClose, onAgentCreated }: CreateAgentModalProps) {
    const { user } = useUser();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        niche: "",
        tone: "Professional",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!user) return;
        setLoading(true);

        try {
            const { error } = await supabase.from("agents").insert({
                user_id: user.id,
                name: formData.name,
                niche: formData.niche,
                tone: formData.tone,
            });

            if (error) throw error;

            onAgentCreated();
            onClose();
            setFormData({ name: "", niche: "", tone: "Professional" });
        } catch (error) {
            console.error("Error creating agent:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[60] bg-black/40 dark:bg-black/60 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none"
                    >
                        <div className="w-full max-w-md pointer-events-auto rounded-2xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-900 p-6 shadow-2xl">
                            <div className="mb-6 flex items-center justify-between">
                                <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400">
                                    <Sparkles size={20} />
                                    <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Create New Agent</h2>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="rounded-full p-2 text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-white/10 hover:text-zinc-900 dark:hover:text-white transition-colors"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="mb-1 block text-sm font-medium text-zinc-600 dark:text-zinc-400">Agent Name</label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="e.g., Tech Daily"
                                        className="w-full rounded-lg border border-zinc-300 dark:border-white/10 bg-white dark:bg-black/50 p-3 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label className="mb-1 block text-sm font-medium text-zinc-600 dark:text-zinc-400">Niche / Topic</label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="e.g., AI News, Crypto, Mindfulness"
                                        className="w-full rounded-lg border border-zinc-300 dark:border-white/10 bg-white dark:bg-black/50 p-3 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors"
                                        value={formData.niche}
                                        onChange={(e) => setFormData({ ...formData, niche: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label className="mb-1 block text-sm font-medium text-zinc-600 dark:text-zinc-400">Tone</label>
                                    <select
                                        className="w-full rounded-lg border border-zinc-300 dark:border-white/10 bg-white dark:bg-black/50 p-3 text-zinc-900 dark:text-white focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors appearance-none"
                                        value={formData.tone}
                                        onChange={(e) => setFormData({ ...formData, tone: e.target.value })}
                                    >
                                        <option value="Professional">Professional</option>
                                        <option value="Casual">Casual</option>
                                        <option value="Excited">Excited</option>
                                        <option value="Witty">Witty</option>
                                        <option value="Educational">Educational</option>
                                    </select>
                                </div>

                                <div className="pt-4">
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full rounded-lg bg-gradient-to-r from-purple-600 to-cyan-500 p-3 font-bold text-white shadow-lg transition-transform hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100"
                                    >
                                        {loading ? "Creating Agent..." : "Deploy Agent"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

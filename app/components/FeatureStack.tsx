"use client";

import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { useRef } from "react";
import { Bot, Calendar, Clapperboard } from "lucide-react";

interface CardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    color: string;
    index: number;
    progress: MotionValue<number>;
    range: [number, number];
    targetScale: number;
}

const Card = ({
    title,
    description,
    icon,
    color,
    index,
    progress,
    range,
    targetScale,
}: CardProps) => {
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div className="sticky top-0 flex h-screen items-center justify-center">
            <motion.div
                style={{
                    scale,
                    top: `calc(-5vh + ${index * 25}px)`,
                }}
                className="relative -top-[25%] flex h-[500px] w-full max-w-4xl flex-col justify-between rounded-3xl border border-white/10 bg-zinc-900/90 p-12 shadow-2xl backdrop-blur-md dark:bg-black/80 md:h-[600px] md:flex-row md:gap-12"
            >
                <div className="flex flex-col justify-between md:w-1/2">
                    <div>
                        <div className={`mb-8 flex h-16 w-16 items-center justify-center rounded-2xl ${color} text-white shadow-lg`}>
                            {icon}
                        </div>
                        <h2 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl">{title}</h2>
                        <p className="text-lg text-zinc-400">{description}</p>
                    </div>

                    <div className="mt-8 flex items-center gap-2 text-sm font-medium text-zinc-500">
                        <span>0{index + 1}</span>
                        <div className="h-px w-12 bg-zinc-700"></div>
                        <span>03</span>
                    </div>
                </div>

                <div className="relative mt-8 h-full min-h-[250px] w-full overflow-hidden rounded-2xl bg-zinc-950 border border-white/5 md:mt-0 md:w-1/2">
                    {/* Abstract UI for each card */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-30">
                        <div className={`h-64 w-64 rounded-full ${color} filter blur-[80px]`}></div>
                    </div>

                    <div className="relative z-10 h-full p-6">
                        {index === 0 && (
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 rounded-lg bg-white/5 p-4 border border-white/10">
                                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                                    <div className="h-2 w-24 rounded-full bg-zinc-700"></div>
                                </div>
                                <div className="ml-8 space-y-2 border-l border-zinc-800 pl-4">
                                    <div className="h-16 rounded-lg bg-white/5 p-2"></div>
                                    <div className="h-16 rounded-lg bg-white/5 p-2"></div>
                                </div>
                            </div>
                        )}
                        {index === 1 && (
                            <div className="grid grid-cols-7 gap-2">
                                {Array.from({ length: 14 }).map((_, i) => (
                                    <div key={i} className={`aspect-square rounded-md ${i === 4 || i === 8 ? 'bg-purple-600' : 'bg-white/5'}`}></div>
                                ))}
                            </div>
                        )}
                        {index === 2 && (
                            <div className="h-full w-full rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 flex items-center justify-center">
                                <span className="font-mono text-xs text-indigo-300">RENDERING: 99%</span>
                            </div>
                        )}
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default function FeatureStack() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"],
    });

    const features = [
        {
            title: "AI Video Generation",
            description: "Transform simple text prompts into high-fidelity video content. Our neural engine understands context, lighting, and camera angles.",
            icon: <Clapperboard size={32} />,
            color: "bg-indigo-600",
        },
        {
            title: "Autonomous Scheduling",
            description: "Let our AI agent manage your content calendar. It predicts viral potential and posts automatically across platforms.",
            icon: <Calendar size={32} />,
            color: "bg-purple-600",
        },
        {
            title: "Neural Sound Synthesis",
            description: "Generate professional voiceovers and adaptive soundscapes that perfectly match the mood of your video.",
            icon: <Bot size={32} />,
            color: "bg-cyan-600",
        },
    ];

    return (
        <div ref={container} className="relative mt-[20vh] h-[300vh]">
            {features.map((feature, i) => {
                const targetScale = 1 - (features.length - i) * 0.05;
                return (
                    <Card
                        key={i}
                        index={i}
                        {...feature}
                        progress={scrollYProgress}
                        range={[i * 0.25, 1]}
                        targetScale={targetScale}
                    />
                );
            })}
        </div>
    );
}

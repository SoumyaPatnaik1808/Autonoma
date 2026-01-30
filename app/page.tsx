"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import FeatureStack from "./components/FeatureStack";
import Footer from "./components/Footer";
import { SignedIn, SignedOut } from "@clerk/nextjs";

const letterAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-purple-500/30 selection:text-purple-200">

      <Navbar />

      <main className="flex flex-col items-center">

        {/* Hero Section */}
        <section id="product" className="relative flex min-h-[90vh] w-full flex-col items-center justify-center overflow-hidden pt-24 text-center">
          {/* Background Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/20 blur-[100px] animate-pulse"></div>
          <div className="absolute top-0 right-0 -z-10 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[100px]"></div>

          <div className="container px-6 md:px-12">
            <div className="mb-8 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-purple-300 backdrop-blur-sm shadow-xl">
              <span className="mr-3 h-2 w-2 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)] animate-pulse"></span>
              V2.0 Neural Engine Live
            </div>

            <motion.h1
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.1 }}
              className="mx-auto mb-8 max-w-5xl text-6xl font-bold tracking-tighter md:text-8xl lg:text-9xl"
            >
              {Array.from("Auto").map((char, i) => (
                <motion.span key={i} variants={letterAnimation}>
                  {char}
                </motion.span>
              ))}
              <span className="text-gradient">
                {Array.from("noma").map((char, i) => (
                  <motion.span key={i} variants={letterAnimation}>
                    {char}
                  </motion.span>
                ))}
              </span>
            </motion.h1>

            <h2 className="mx-auto mb-12 max-w-2xl text-xl font-medium text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 md:text-2xl">
              The first autonomous AI agent for <br /> faceless YouTube automation.
            </h2>

            <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
              <SignedOut>
                <Link href="/register" className="group relative flex h-14 items-center justify-center rounded-full bg-white px-10 text-lg font-bold text-black transition-all hover:scale-105 hover:bg-zinc-100 shadow-[0_0_20px_-5px_rgba(255,255,255,0.4)]">
                  <span className="relative z-10">Start Creating</span>
                  <div className="absolute inset-0 -z-10 rounded-full bg-white blur-lg opacity-20 transition-opacity group-hover:opacity-40"></div>
                </Link>
              </SignedOut>
              <SignedIn>
                <Link href="/dashboard" className="group relative flex h-14 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 px-10 text-lg font-bold text-white transition-all hover:scale-105 shadow-[0_0_20px_-5px_rgba(139,92,246,0.5)]">
                  <span className="relative z-10">Go to Dashboard</span>
                </Link>
              </SignedIn>

            </div>
          </div>
        </section>

        {/* Feature Stack Section */}
        <section id="features" className="w-full">
          <div className="container mx-auto px-6 md:px-12">
            <div className="mb-20 text-center">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-purple-400">Core Architecture</h3>
              <h2 className="mt-4 text-4xl font-bold md:text-5xl">Built for Scale</h2>
            </div>

            <FeatureStack />
          </div>
        </section>

        {/* CTA / Final Section */}
        <section className="relative w-full py-32 overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
          <div className="container mx-auto px-6 text-center">
            <h2 className="mb-8 text-4xl font-bold tracking-tight md:text-6xl">Ready to create your vedios?</h2>
            <Link href="#" className="inline-flex h-16 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 px-12 text-xl font-bold text-white shadow-2xl transition-transform hover:scale-105">
              Get Started
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

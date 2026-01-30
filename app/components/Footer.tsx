import Link from 'next/link';
import { Ghost, Twitter, Github, Linkedin, Disc as Discord } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="w-full border-t border-white/5 bg-black py-20 text-zinc-500">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-4 lg:gap-24">

                    <div className="flex flex-col gap-6">
                        <Link href="/" className="flex items-center gap-2 text-white">
                            <Ghost size={24} className="text-purple-500" />
                            <span className="text-xl font-bold tracking-tight">Autonoma</span>
                        </Link>
                        <p className="text-sm leading-relaxed">
                            We are building the future of autonomous content creation.
                            Powered by 2026 AI Architecture.
                        </p>
                    </div>

                    <div>
                        <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white">Product</h3>
                        <ul className="flex flex-col gap-3 text-sm">
                            <li><Link href="#" className="hover:text-purple-400 transition-colors">Neural Engine</Link></li>
                            <li><Link href="#" className="hover:text-purple-400 transition-colors">Agents</Link></li>
                            <li><Link href="#" className="hover:text-purple-400 transition-colors">Pricing</Link></li>
                            <li><Link href="#" className="hover:text-purple-400 transition-colors">Enterprise</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white">Company</h3>
                        <ul className="flex flex-col gap-3 text-sm">
                            <li><Link href="#" className="hover:text-purple-400 transition-colors">About</Link></li>
                            <li><Link href="#" className="hover:text-purple-400 transition-colors">Careers</Link></li>
                            <li><Link href="#" className="hover:text-purple-400 transition-colors">Blog</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white">Connect</h3>
                        <div className="flex gap-4">
                            <Link href="#" className="rounded-full bg-white/5 p-3 hover:bg-white/10 hover:text-white transition-colors"><Twitter size={18} /></Link>
                            <Link href="#" className="rounded-full bg-white/5 p-3 hover:bg-white/10 hover:text-white transition-colors"><Github size={18} /></Link>
                            <Link href="#" className="rounded-full bg-white/5 p-3 hover:bg-white/10 hover:text-white transition-colors"><Discord size={18} /></Link>
                            <Link href="#" className="rounded-full bg-white/5 p-3 hover:bg-white/10 hover:text-white transition-colors"><Linkedin size={18} /></Link>
                        </div>
                    </div>
                </div>

                <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-8 text-xs md:flex-row">
                    <p>© 2026 Autonoma AI Inc. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

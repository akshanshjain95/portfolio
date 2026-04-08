import Link from "next/link";

export default function TerminalLayout({
                                           children,
                                       }: {
    children: React.ReactNode;
}) {
    return (
        <main className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#050505] text-green-400 font-mono flex justify-center p-4">
            <div className="w-full max-w-6xl border border-green-500/10 rounded-xl shadow-[0_0_40px_rgba(34,197,94,0.08)]">

                {/* Top Bar */}
                <div className="flex items-center justify-between px-4 py-2 border-b border-green-500/20 text-sm">

                    {/* Left side (window controls + domain) */}
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full" />
                        <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                        <div className="w-3 h-3 bg-green-500 rounded-full" />
                        <span className="ml-3 text-green-300">akshan.sh</span>
                    </div>

                    {/* Right side nav */}
                    <div className="flex gap-6">
                        <Link href="/about" className="hover:text-green-200 transition">
                            about
                        </Link>
                        <Link href="/skills" className="hover:text-green-200 transition">
                            skills
                        </Link>
                        <Link href="/work" className="hover:text-green-200 transition">
                            work
                        </Link>
                        <Link href="/contact" className="hover:text-green-200 transition">
                            contact
                        </Link>
                    </div>

                </div>

                {/* Content */}
                <div className="p-6">
                    {children}
                </div>

            </div>
        </main>
    );
}

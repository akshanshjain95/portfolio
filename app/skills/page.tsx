import TerminalLayout from "@/components/TerminalLayout";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function SkillsPage() {
    return (
        <TerminalLayout>
            <div className="max-w-5xl space-y-10">

                {/* Command */}
                <Reveal delay={0}>
                    <p className="text-green-500">akshansh@system:~$ skills</p>
                </Reveal>

                {/* Header */}
                <Reveal delay={100}>
                    <div className="space-y-2">
                        <h1 className="text-3xl text-green-300">Skills</h1>
                        <p className="text-gray-400">
                            Backend systems, distributed architectures, and data platforms.
                        </p>
                    </div>
                </Reveal>

                {/* Skill Sections */}
                <Reveal delay={200}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Backend */}
                        <div className="border border-green-500/20 rounded-xl p-5 bg-black/30 hover:bg-black/50 transition">
                            <p className="text-green-300 mb-3">Backend</p>
                            <ul className="space-y-2 text-gray-300 text-sm">
                                <li>Java, Kotlin</li>
                                <li>Spring Boot, Microservices</li>
                                <li>REST APIs, service architecture</li>
                            </ul>
                        </div>

                        {/* Data Systems */}
                        <div className="border border-green-500/20 rounded-xl p-5 bg-black/30 hover:bg-black/50 transition">
                            <p className="text-green-300 mb-3">Data Systems</p>
                            <ul className="space-y-2 text-gray-300 text-sm">
                                <li>PostgreSQL, MySQL</li>
                                <li>MongoDB</li>
                                <li>Query optimization, indexing, schema design</li>
                            </ul>
                        </div>

                        {/* Distributed Systems */}
                        <div className="border border-green-500/20 rounded-xl p-5 bg-black/30 hover:bg-black/50 transition">
                            <p className="text-green-300 mb-3">Distributed Systems</p>
                            <ul className="space-y-2 text-gray-300 text-sm">
                                <li>Event-driven architectures (Kafka)</li>
                                <li>Async processing and reconciliation workflows</li>
                                <li>Handling consistency, retries, and failures</li>
                            </ul>
                        </div>

                        {/* System Architecture */}
                        <div className="border border-green-500/20 rounded-xl p-5 bg-black/30 hover:bg-black/50 transition">
                            <p className="text-green-300 mb-3">System Architecture</p>
                            <ul className="space-y-2 text-gray-300 text-sm">
                                <li>Multi-tenant system design</li>
                                <li>Flexible data models and schema systems</li>
                                <li>Access control and system abstractions</li>
                            </ul>
                        </div>

                        {/* Infrastructure */}
                        <div className="border border-green-500/20 rounded-xl p-5 bg-black/30 hover:bg-black/50 transition md:col-span-2">
                            <p className="text-green-300 mb-3">Infrastructure</p>
                            <ul className="space-y-2 text-gray-300 text-sm">
                                <li>Docker, Kubernetes</li>
                                <li>Deployment and release workflows</li>
                            </ul>
                        </div>

                    </div>
                </Reveal>

                {/* Back */}
                <Reveal delay={300}>
                    <Link
                        href="/"
                        className="text-green-500 hover:text-green-300 transition"
                    >
                        akshansh@system:~$ cd ..<span className="cursor"></span>
                    </Link>
                </Reveal>

            </div>
        </TerminalLayout>
    );
}
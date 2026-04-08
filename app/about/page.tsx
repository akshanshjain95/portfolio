import TerminalLayout from "@/components/TerminalLayout";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function AboutPage() {
    return (
        <TerminalLayout>
            <div className="max-w-4xl space-y-10">

                {/* Command */}
                <Reveal delay={0}>
                    <p className="text-green-500">akshansh@system:~$ about</p>
                </Reveal>

                {/* Header */}
                <Reveal delay={100}>
                    <div className="space-y-2">
                        <h1 className="text-3xl text-green-300">Akshansh Jain</h1>
                        <p className="text-green-400">Backend Engineer & System Architect</p>
                        <p className="text-gray-400">
                            I build backend systems that remain reliable under real-world load.
                        </p>
                    </div>
                </Reveal>

                {/* About */}
                <Reveal delay={200}>
                    <div className="space-y-4">
                        <h2 className="text-green-400">About</h2>
                        <p className="text-gray-300">
                            I’m a backend engineer with 9+ years of experience building scalable systems
                            and microservice-based platforms.
                        </p>
                        <p className="text-gray-300">
                            My work has focused on solving real-world backend problems where reliability,
                            consistency, and performance matter under scale.
                        </p>
                        <p className="text-gray-300">
                            I’ve worked on systems involving payments, multi-tenant architectures,
                            and asynchronous workflows where failure handling and data integrity are critical.
                        </p>
                    </div>
                </Reveal>

                {/* Core Strengths */}
                <Reveal delay={300}>
                    <div className="space-y-4">
                        <h2 className="text-green-400">Core Strengths</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                {
                                    title: "System Design",
                                    desc: "Designing scalable, fault-tolerant architectures for real-world use.",
                                },
                                {
                                    title: "Backend Engineering",
                                    desc: "Building clean, maintainable services and well-structured APIs.",
                                },
                                {
                                    title: "Distributed Systems",
                                    desc: "Designing systems that handle concurrency, failures, and async flows.",
                                },
                                {
                                    title: "Data Systems",
                                    desc: "Designing schemas and queries that scale with growing data.",
                                },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="border border-green-500/20 rounded-xl p-4 bg-black/30 hover:bg-black/50 transition"
                                >
                                    <p className="text-green-300">{item.title}</p>
                                    <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Reveal>

                {/* Selected Work */}
                <Reveal delay={400}>
                    <div className="space-y-4">
                        <h2 className="text-green-400">Selected Work</h2>

                        <ul className="space-y-3 text-gray-300">
                            <li>
                                Built high-scale payment and reconciliation systems handling real-time transactions and consistency challenges
                            </li>
                            <li>
                                Designed multi-tenant backend systems with flexible data models and access control mechanisms
                            </li>
                        </ul>

                        <p className="text-green-500 text-sm">
                            → <Link href="/work">See full details</Link>
                        </p>
                    </div>
                </Reveal>

                {/* Approach */}
                <Reveal delay={500}>
                    <div className="space-y-4">
                        <h2 className="text-green-400">Approach</h2>

                        <div className="border border-green-500/20 rounded-xl p-4 bg-black/30">
                            <ul className="space-y-2 text-gray-300">
                                <li>Prefer simple and maintainable systems</li>
                                <li>Design for reliability and real-world scale</li>
                                <li>Build predictable and stable APIs</li>
                                <li>Optimize based on actual bottlenecks</li>
                            </ul>
                        </div>
                    </div>
                </Reveal>

                {/* Back */}
                <Reveal delay={600}>
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
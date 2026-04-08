"use client";

import TerminalLayout from "@/components/TerminalLayout";
import TerminalSection from "@/components/TerminalSection";
import Reveal from "@/components/Reveal";
import Link from "next/link";

export default function Home() {
    return (
        <TerminalLayout>
            <div className="space-y-10">

                {/* HERO */}
                <Reveal delay={0}>
                    <div className="flex flex-col md:flex-row md:items-center gap-25">

                        {/* LEFT SIDE (text) */}
                        <div className="space-y-4 flex-1 max-w-xl">
                            <p className="text-green-500">akshansh@system:~$ whoami</p>

                            <div>
                                <h1 className="text-3xl text-green-300">Akshansh Jain</h1>
                                <p className="text-green-500">
                                    Backend Engineer & System Architect
                                </p>
                            </div>

                            <p className="text-green-400">
                                I design scalable systems that don’t break under load.
                            </p>
                        </div>

                        {/* RIGHT SIDE (image) */}
                        <div className="flex-shrink-0 mt-2 md:ml-6 translate-y-6">
                            <div
                                className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border border-green-500/20 shadow-[0_0_25px_rgba(34,197,94,0.15)]">

                                <img
                                    src="/profile.png"
                                    alt="Akshansh"
                                    className="w-full h-full object-cover"
                                />

                            </div>
                        </div>

                    </div>
                </Reveal>

                {/* BUTTONS */}
                <Reveal delay={150}>
                    <div>

                        <div className="flex gap-4 flex-wrap">
                            <Link href="/about">
                                <button
                                    className="border border-green-500/20 px-4 py-1.5 rounded-md hover:bg-green-500/10 hover:border-green-400/40 transition hover:shadow-[0_0_10px_rgba(34,197,94,0.2)] cursor-pointer"
                                >
                                    &gt; about
                                </button>
                            </Link>

                            <Link href="/skills">
                                <button
                                    className="border border-green-500/20 px-4 py-1.5 rounded-md hover:bg-green-500/10 hover:border-green-400/40 transition hover:shadow-[0_0_10px_rgba(34,197,94,0.2)] cursor-pointer"
                                >
                                    &gt; skills
                                </button>
                            </Link>

                            <Link href="/work">
                                <button
                                    className="border border-green-500/20 px-4 py-1.5 rounded-md hover:bg-green-500/10 hover:border-green-400/40 transition hover:shadow-[0_0_10px_rgba(34,197,94,0.2)] cursor-pointer"
                                >
                                    &gt; work
                                </button>
                            </Link>

                            <Link href="/contact">
                                <button
                                    className="border border-green-500/20 px-4 py-1.5 rounded-md hover:bg-green-500/10 hover:border-green-400/40 transition hover:shadow-[0_0_10px_rgba(34,197,94,0.2)] cursor-pointer"
                                >
                                    &gt; contact
                                </button>
                            </Link>
                        </div>
                    </div>
                </Reveal>

                {/* PANELS */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <Reveal delay={300}>
                        <div id="about">
                            <TerminalSection title="about">
                                <p>
                                    I’m a backend engineer with 9+ years of experience building
                                    scalable systems, microservices, and data-intensive platforms.
                                </p>
                                <p className="mt-2">
                                    I enjoy solving complex problems, designing clean APIs,
                                    and working with systems that have real impact.
                                </p>
                            </TerminalSection>
                        </div>
                    </Reveal>

                    <Reveal delay={450}>
                        <div id="skills">
                            <TerminalSection title="skills">
                                <p>
                                    <span className="text-green-400">Languages:</span> Java, Kotlin
                                </p>
                                <p>
                                    <span className="text-green-400">Backend:</span> Spring Boot, Microservices
                                </p>
                                <p>
                                    <span className="text-green-400">Data:</span> PostgreSQL, MongoDB, Elasticsearch
                                </p>
                                <p>
                                    <span className="text-green-400">Messaging:</span> Kafka
                                </p>
                                <p>
                                    <span className="text-green-400">Infra:</span> Docker, Kubernetes
                                </p>
                            </TerminalSection>
                        </div>
                    </Reveal>

                    <Reveal delay={600}>
                        <div id="work">
                            <TerminalSection title="work">
                                <p className="text-green-400">
                                    Ixigo — Senior Software Engineer
                                </p>
                                <p className="mb-2">
                                    Built payment and reconciliation systems handling millions of transactions.
                                </p>

                                <p className="text-green-400">
                                    Ontic — Software Engineer
                                </p>
                                <p>
                                    Worked on multi-tenant platform with dynamic schemas and optimized queries.
                                </p>
                            </TerminalSection>
                        </div>
                    </Reveal>

                    <Reveal delay={750}>
                        <div id="contact">
                            <TerminalSection title="contact">
                                <p>Email: akshansh95jain@gmail.com</p>
                                <p>GitHub: https://github.com/akshanshjain95</p>
                                <p>LinkedIn: https://www.linkedin.com/in/akshansh-jain</p>
                                <p className="mt-2">Let’s build something impactful.</p>
                            </TerminalSection>
                        </div>
                    </Reveal>

                </div>

                {/* CURSOR */}
                <Reveal delay={900}>
                    <p className="text-green-500 mt-4">
                        &gt; <span className="cursor"></span>
                    </p>
                </Reveal>

            </div>
        </TerminalLayout>
    );
}
import TerminalLayout from "@/components/TerminalLayout";
import Link from "next/link";
import Reveal from "@/components/Reveal";

function WorkCard({ title, duration, focus, stack, children }: any) {
    return (
        <div className="border border-green-500/20 rounded-xl p-6 bg-black/30 hover:bg-black/50 transition space-y-4">

            {/* Title */}
            <h2 className="text-green-300 text-xl">{title}</h2>

            {/* Metadata */}
            <div className="text-sm space-y-1">
                <p className="text-gray-400">
                    <span className="text-green-500">Duration:</span> {duration}
                </p>
                <p className="text-gray-400">
                    <span className="text-green-500">Focus:</span> {focus}
                </p>
                {stack && (
                    <p className="text-gray-400">
                        <span className="text-green-500">Stack:</span> {stack}
                    </p>
                )}
            </div>

            {/* Description */}
            <div className="space-y-3 text-gray-300">
                {children}
            </div>
        </div>
    );
}

export default function WorkPage() {
    return (
        <TerminalLayout>
            <div className="max-w-5xl space-y-10">

                {/* Command */}
                <Reveal delay={0}>
                    <p className="text-green-500">akshansh@system:~$ work</p>
                </Reveal>

                {/* Header */}
                <Reveal delay={100}>
                    <div className="space-y-2">
                        <h1 className="text-3xl text-green-300">Work</h1>
                        <p className="text-gray-400">
                            Real-world systems, built for scale.
                        </p>
                    </div>
                </Reveal>

                {/* Work Cards */}
                <Reveal delay={200}>
                    <div className="space-y-6">

                        <WorkCard
                            title="Ixigo — Payments Systems"
                            duration="2021 — 2024"
                            focus="High-scale payment & reconciliation systems"
                            stack="Java, Spring Boot, Kafka"
                        >
                            <p>
                                Built systems handling real-time transactions and reconciliation
                                workflows across distributed services.
                            </p>
                            <p>
                                Designed asynchronous pipelines ensuring consistency while
                                handling retries, failures, and edge cases.
                            </p>
                        </WorkCard>

                        <WorkCard
                            title="Ontic — Multi-tenant Platform"
                            duration="2024 — Present"
                            focus="Multi-tenant backend architecture"
                            stack="Java, PostgreSQL, MongoDB"
                        >
                            <p>
                                Designed flexible systems with custom data models and built
                                frameworks for relationships, access control, versioning, and
                                deployment tracking.
                            </p>
                            <p>
                                Balanced schema flexibility with performance and query efficiency
                                at scale.
                            </p>
                        </WorkCard>

                        <WorkCard
                            title="Open Source — Debezium"
                            duration="Contribution"
                            focus="Data pipeline correctness"
                            stack="Java"
                        >
                            <p>
                                Fixed an issue where timestamp serialization truncated leading
                                zeros, causing precision loss in downstream systems.
                            </p>
                            <p>
                                Ensured consistent deserialization across pipelines handling
                                time-based data.
                            </p>

                            <a
                                href="https://github.com/debezium/debezium/pull/4186"
                                target="_blank"
                                className="text-green-500 hover:text-green-300 text-sm"
                            >
                                → View PR
                            </a>
                        </WorkCard>

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
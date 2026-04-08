import TerminalLayout from "@/components/TerminalLayout";
import Link from "next/link";
import Reveal from "@/components/Reveal";

function ContactItem({ label, value, href }: any) {
    return (
        <div className="border border-green-500/20 rounded-xl p-5 bg-black/30 hover:bg-black/50 transition">
            <p className="text-green-400 mb-1">{label}</p>

            {href ? (
                <a
                    href={href}
                    target="_blank"
                    className="text-gray-300 hover:text-green-300 transition break-all"
                >
                    {value}
                </a>
            ) : (
                <p className="text-gray-300 break-all">{value}</p>
            )}
        </div>
    );
}

export default function ContactPage() {
    return (
        <TerminalLayout>
            <div className="max-w-3xl space-y-10">

                {/* Command */}
                <Reveal delay={0}>
                    <p className="text-green-500">akshansh@system:~$ contact</p>
                </Reveal>

                {/* Header */}
                <Reveal delay={100}>
                    <div className="space-y-2">
                        <h1 className="text-3xl text-green-300">Contact</h1>
                        <p className="text-gray-400">
                            Get in touch.
                        </p>
                    </div>
                </Reveal>

                {/* Contact Items */}
                <Reveal delay={200}>
                    <div className="space-y-4">

                        <ContactItem
                            label="Email"
                            value="akshansh95jain@gmail.com"
                            href="mailto:akshansh95jain@gmail.com"
                        />

                        <ContactItem
                            label="LinkedIn"
                            value="https://www.linkedin.com/in/akshansh-jain"
                            href="https://www.linkedin.com/in/akshansh-jain"
                        />

                        <ContactItem
                            label="GitHub"
                            value="https://github.com/akshanshjain95"
                            href="https://github.com/akshanshjain95"
                        />

                    </div>
                </Reveal>

                {/* Closing Line */}
                <Reveal delay={300}>
                    <p className="text-gray-400">
                        Open to backend engineering, system design discussions,
                        and interesting problem spaces.
                    </p>
                </Reveal>

                {/* Back */}
                <Reveal delay={400}>
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
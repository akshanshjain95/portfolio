export default function TerminalSection({
                                            title,
                                            children,
                                        }: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div className="border border-green-500/10 rounded-xl p-5 bg-green-500/[0.02] shadow-[0_0_20px_rgba(34,197,94,0.05)] hover:shadow-[0_0_25px_rgba(34,197,94,0.12)] transition duration-300">
            <p className="text-green-400 font-semibold mb-3">
                akshansh@system:~$ {title}
            </p>
            <div className="text-green-300/90 text-sm leading-relaxed">
                {children}
            </div>
        </div>
    );
}
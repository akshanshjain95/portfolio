const CLI_USER_AGENTS = ["curl", "wget", "httpie"] as const;

export function isCliRequest(userAgent: string | null): boolean {
    if (!userAgent) {
        return false;
    }

    const normalizedUserAgent = userAgent.toLowerCase();

    return CLI_USER_AGENTS.some((client) =>
        normalizedUserAgent.includes(client),
    );
}

import { CLI_CONTENT_BY_PATH, CLI_NOT_FOUND_CONTENT } from "./content";

type CliPath = keyof typeof CLI_CONTENT_BY_PATH;

function normalizePath(pathname: string): string {
    if (pathname === "/") {
        return pathname;
    }

    return pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
}

export function renderCliPath(pathname: string): string {
    const normalizedPath = normalizePath(pathname);

    return (
        CLI_CONTENT_BY_PATH[normalizedPath as CliPath] ?? CLI_NOT_FOUND_CONTENT
    );
}

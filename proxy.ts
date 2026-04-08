import type { NextRequest } from "next/server";

import { handleCliRequest } from "./lib/cli/handle-cli-request";

export function proxy(request: NextRequest) {
    return handleCliRequest(request);
}

export const config = {
    matcher: [
        "/((?!api|_next/static|_next/image|favicon.ico|.*\\.[^/]+$).*)",
    ],
};

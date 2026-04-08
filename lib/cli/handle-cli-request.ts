import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { renderCliPath } from "./routes";
import { createCliResponse } from "./response";
import { isCliRequest } from "./user-agent";

export function handleCliRequest(request: NextRequest): NextResponse {
    if (!isCliRequest(request.headers.get("user-agent"))) {
        return NextResponse.next();
    }

    return createCliResponse(renderCliPath(request.nextUrl.pathname));
}

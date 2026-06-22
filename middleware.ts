import { NextResponse, type NextRequest } from "next/server";

// Middleware passthrough for local demo — re-enable auth checks when Supabase is configured
export async function middleware(request: NextRequest) {
  return NextResponse.next({ request });
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};

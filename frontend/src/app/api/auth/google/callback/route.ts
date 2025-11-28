import { NextRequest, NextResponse } from "next/server";

const DEFAULT_API_BASE = "http://localhost:5000/api";

const getBackendCallbackUrl = (search: string) => {
  const base = process.env.NEXT_PUBLIC_API_URL || DEFAULT_API_BASE;
  const normalizedBase = base.endsWith("/api") ? base.slice(0, -4) : base;
  return `${normalizedBase}/api/auth/google/callback${search}`;
};

export function GET(request: NextRequest) {
  const search = request.nextUrl.search || "";
  const target = getBackendCallbackUrl(search);
  return NextResponse.redirect(target);
}


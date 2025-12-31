import { domains } from "../DATA/domains";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    return new Response(JSON.stringify(domains), {
        headers: { 'Content-Type': 'application/json' }
    });
}

export async function POST(request: NextRequest) {
    const domain = await request.json();
    const newDomain = {
        id: domains.length + 1,
        ...domain
    };

    domains.push(newDomain);

    return new Response(JSON.stringify(newDomain), {
        headers: { 'Content': 'application/json' },
        status: 201
    });
}
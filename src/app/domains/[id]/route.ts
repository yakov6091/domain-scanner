import { domains } from "@/app/DATA/domains";
import { NextRequest } from "next/server";

export async function PATCH(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const { name, isActive, lastChecked } = await request.json();

    const domainIdx = domains.findIndex((domain) =>
        domain.id === Number(id));
    if (domainIdx === -1) {
        return new Response('Domain not found with this id', { status: 404 });
    }

    domains[domainIdx] = {
        ...domains[domainIdx],
        name,
        isActive,
        lastChecked,
    };

    return new Response(JSON.stringify(domains[domainIdx]), {
        headers: { 'Content-Type': 'application/json' },
        status: 200
    });
}

export async function DELETE(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;

    const dommainIdx = domains.findIndex((domain) => domain.id === Number(id));
    if (dommainIdx === -1) {
        return new Response('Domain not found', { status: 404 });
    }

    domains.splice(dommainIdx, 1);

    return new Response(JSON.stringify(domains), {
        headers: { 'Content-Type': 'application/json' },
        status: 200
    });
}
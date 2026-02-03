import { db } from "@/db";
import { NextRequest } from "next/server";

export async function POST(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }

) {
    try {
        const { id } = await params;
        const { status } = await request.json();
        if (!id || !status) {
            return Response.json(
                { error: 'Missing domainId or status' },
                { status: 400 }
            );
        }

        await db.query(
            `INSERT INTO history_status (domain_id, status_code)
             VALUES (?,?)
            `, [id, status]
        );

        return Response.json({ ok: true });

    } catch (error) {
        console.error('Error to insert', error);
        return Response.json(
            { error: 'Failed to insert history status' },
            { status: 500 }
        );
    }
}
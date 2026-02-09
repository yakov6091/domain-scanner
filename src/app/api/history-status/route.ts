import { db } from "@/db";
import { NextRequest } from "next/server";

export async function POST() {
    try {
        // GET all domains from DB.
        const [domains]: any = await db.query(
            'SELECT domain_id, domain_name FROM domains'
        )

        if (!domains) {
            return Response.json({ message: 'Domains not found' }, { status: 404 });
        }

        // Loop for each domain
        for (const domain of domains) {
            let statusCode = 0;

            try {
                const response = await fetch(`http://${domain.domain_name}`, {
                    method: 'GET'
                });

                statusCode = response.status;

            } catch (error) {
                console.error('Error to get domain', error);
                statusCode = 0;
            }

            // Insert new row to the history_status table
            await db.query(
                `INSERT INTO history_status (domain_id, status_code)
                 VALUES (?,?)`,
                [domain.domain_id, statusCode]
            );
        }

        return Response.json({ ok: true });

    } catch (error) {
        console.error('Domain check failed:', error);
        return Response.json(
            { error: 'Failed to check domains' },
            { status: 500 }
        );
    }
}

import { db } from "@/db";

export async function GET() {
    const [rows] = await db.query('SELECT * FROM history_status');
    return Response.json(rows);
}
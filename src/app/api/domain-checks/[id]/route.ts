import { NextRequest } from "next/server";


export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    // console.log(id)

    // console.log('Domain ID', id);

    return Response.json({
        id,
        status: 200
    });
}

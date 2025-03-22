import { NextResponse, type NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
    const url = request.nextUrl;
    const params = url.searchParams;

    //parameters receiving
    const transactionId = params.get("tid");
    const offerId = params.get("oid");
    const s1 = params.get("s1");
    const s2 = params.get("s2");
    const s3 = params.get("s3");
    const s4 = params.get("s4");
    const s5 = params.get("s5");

    console.log("url: ", url);
    console.log("tid: ", transactionId);
    console.log("oid: ", offerId);
    console.log("s1: ", s1);
    console.log("s2: ", s2);
    console.log("s3: ", s3);
    console.log("s4: ", s4);
    console.log("s5: ", s5);

    return NextResponse.json({ status: "success" })
}
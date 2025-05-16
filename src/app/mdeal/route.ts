import { saveMdealPostback } from '@/db/mdeal/handler';
import { NextResponse, type NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
    const url = request.nextUrl;
    const params = url.searchParams;

    if (params.size === 0) {
        return NextResponse.json({ status: "failed" })
    }

    //parameters receiving
    const offerId = params.get("offer-id");
    const transactionId = params.get("transaction-id");
    const subid1 = params.get("s1");
    const subid2 = params.get("s2");
    const subid3 = params.get("s3");
    const subid4 = params.get("s4");
    const subid5 = params.get("s5");

    try {
        const resp = await saveMdealPostback({ offerId, transactionId, subid1, subid2, subid3, subid4, subid5 });
        console.log("db resp: ", resp)
    } catch (error) {
        console.log("error: ", error)
    }
    return NextResponse.json({ status: "success" })
}
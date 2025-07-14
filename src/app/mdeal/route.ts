import { saveMdealPostback } from '@/db/mdeal/handler';
import { NextResponse, type NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
    const url = request.nextUrl;
    const params = url.searchParams;
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "Unknown IP";

    if (params.size === 0) {
        console.log("No Query Param Found!");
        return NextResponse.json(
            { status: "failed", reason: "0" },
            { status: 400 }
        );
    }

    // parameters receiving
    const offerId = params.get("oid");
    const transactionId = params.get("tid");
    const subid1 = params.get("s1");
    const subid2 = params.get("s2");
    const subid3 = params.get("s3");
    const subid4 = params.get("s4");
    const subid5 = params.get("s5");
    const msp = params.get("msp");

    if (msp !== process.env.MDEAL_MSP) {
        return NextResponse.json(
            { status: "unauthorized", reason: "You are not Allowed" },
            { status: 401 }
        );
    }

    try {
        const conversion = await saveMdealPostback({ offerId, transactionId, subid1, subid2, subid3, subid4, subid5, ip });

        const myURL = "https://eazyearn.netlify.app/api/ms/save-mdeal-conversion"
        const resp = await fetch(myURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "api": `${process.env.MY_API_KEY}`,
            },
            body: JSON.stringify(conversion)
        })

        if (!resp.ok) {
            console.warn("Gm-App API returned error:", resp.status, await resp.text());
        }

        console.log("db resp: ", conversion);
        console.log("saved to Gm-App? ", await resp.json())
    } catch (error) {
        console.error("Database error:", error);
        return NextResponse.json(
            { status: "error", message: "Something went wrong. Please try again later." },
            { status: 500 }
        );
    }

    console.log("success, mdeal postback data saved!")
    return NextResponse.json(
        { status: "success" },
        { status: 200 }
    );
}
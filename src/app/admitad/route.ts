import { saveAdmitadPostback } from '@/db/admitad/handler';
import { NextResponse, type NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
    const url = request.nextUrl;
    const params = url.searchParams;

    if (params.size === 0) {
        return NextResponse.json({ status: "failed" })
    }

    //parameters receiving
    const offerId = params.get("offer_id");
    const offerName = params.get("offer_name");
    const subId = params.get("subid");
    const action = params.get("action");
    const actionId = params.get("action_id");
    const subid1 = params.get("subid1");
    const subid2 = params.get("subid2");
    const subid3 = params.get("subid3");
    const subid4 = params.get("subid4");
    const paymentSum = params.get("payment_sum");
    const paymentStatus = params.get("payment_status");
    const rewardReady = params.get("reward_ready");
    const orderId = params.get("order_id");
    const orderSum = params.get("order_sum");
    const clickTime = params.get("click_time");
    const time = params.get("time");
    const conversionTime = params.get("conversion_time");
    const type = params.get("type");

    const queryData = { offerId, offerName, subId, action, actionId, subid1, subid2, subid3, subid4, paymentSum, paymentStatus, rewardReady, orderId, orderSum, clickTime, time, conversionTime, type };

    try {
        const resp = await saveAdmitadPostback(queryData);
        console.log("db resp: ", resp)
    } catch (error) {
        console.log("error: ", error)
    }

    return NextResponse.json({ status: "success" })
}
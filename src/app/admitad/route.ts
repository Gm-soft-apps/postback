import { saveAdmitadPostback } from '@/db/admitad/handler';
import { NextResponse, type NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
    const url = request.nextUrl;
    const params = url.searchParams;

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
        console.log(resp)
    } catch (error) {
        console.log(error)
    }

    // console.log("url: ", url);
    // console.log("offerId: ", offerId);
    // console.log("offerName: ", offerName);
    // console.log("subId: ", subId);
    // console.log("action: ", action);
    // console.log("actionId: ", actionId);
    // console.log("subid1: ", subid1);
    // console.log("subid2: ", subid2);
    // console.log("subid3: ", subid3);
    // console.log("subid4: ", subid4);
    // console.log("paymentSum: ", paymentSum);
    // console.log("paymentStatus: ", paymentStatus);
    // console.log("rewardReady: ", rewardReady);
    // console.log("orderId: ", orderId);
    // console.log("orderSum: ", orderSum);
    // console.log("clickTime: ", clickTime);
    // console.log("time: ", time);
    // console.log("conversionTime: ", conversionTime);
    // console.log("type: ", type);

    return NextResponse.json({ status: "success" })
}
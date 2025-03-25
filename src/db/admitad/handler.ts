"use server"

import { db } from "@/turso"
import { admitAd } from "./schema"

export const saveAdmitadPostback = async (query: any) => {
    const data = {
        offer_id: query.offerId,
        offer_name: query.offerName,
        subid: query.subId,
        action: query.action,
        action_id: query.actionId,
        subid1: query.subid1,
        subid2: query.subid2,
        subid3: query.subid3,
        subid4: query.subid4,
        payment_sum: query.paymentSum,
        payment_status: query.paymentStatus,
        reward_ready: query.rewardReady,
        order_id: query.orderId,
        order_sum: query.orderSum,
        click_time: query.clickTime,
        time: query.time,
        convertion_time: query.conversionTime,
        type: query.type
    }
    console.log(query.time)
    return await db.insert(admitAd).values(data).returning();
}
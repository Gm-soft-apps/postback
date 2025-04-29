"use server"

import { db } from "@/turso"
import { admitAd } from "./schema"

interface AdmitadPostbackQuery {
    offerId: string | null;
    offerName: string | null;
    subId: string | null;
    action: string | null;
    actionId: string | null;
    subid1: string | null;
    subid2: string | null;
    subid3: string | null;
    subid4: string | null;
    paymentSum: string | null;
    paymentStatus: string | null;
    rewardReady: string | null;
    orderId: string | null;
    orderSum: string | null;
    clickTime: string | null;
    time: string | null;
    conversionTime: string | null;
    type: string | null;
  }

export const saveAdmitadPostback = async (query: AdmitadPostbackQuery) => {
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
    return await db.insert(admitAd).values(data).returning();
}
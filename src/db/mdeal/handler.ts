"use server"

import { db } from "@/turso"
import { mdeal } from "./schema"

export const saveMdealPostback = async (query: any) => {
    const data = {
        offer_id: query.offerId,
        transaction_id: query.transactionId,
        subid1: query.subid1,
        subid2: query.subid2,
        subid3: query.subid3,
        subid4: query.subid4,
        subid5: query.subid5,
        convertion_time: new Date(),
    }

    return await db.insert(mdeal).values(data).returning();
}
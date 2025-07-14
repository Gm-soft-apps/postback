"use server"

import { db } from "@/turso"
import { mdeal } from "./schema"

interface MdealPostbackQuery {
    offerId: string | null;
    transactionId: string | null;
    subid1?: string | null;
    subid2?: string | null;
    subid3?: string | null;
    subid4?: string | null;
    subid5?: string | null;
    ip?: string | null;
}

export const saveMdealPostback = async (query: MdealPostbackQuery) => {
    const data = {
        offer_id: query.offerId,
        transaction_id: query.transactionId,
        subid1: query.subid1,
        subid2: query.subid2,
        subid3: query.subid3,
        subid4: query.subid4,
        subid5: query.subid5,
        convertion_time: new Date(),
        ip: query.ip,
    }

    const resp = await db.insert(mdeal).values(data).returning();
    return resp[0];
}
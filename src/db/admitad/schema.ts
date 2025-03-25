import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const admitAd = sqliteTable("admitad_postback", {
    id: int().primaryKey({ autoIncrement: true }),
    offer_id: int(),
    offer_name: text(),
    subid: text(),
    action: text(),
    action_id: text(),
    subid1: text(),
    subid2: text(),
    subid3: text(),
    subid4: text(),
    payment_sum: int(),
    payment_status: text(),
    reward_ready: text(),
    order_id: int(),
    order_sum: int(),
    click_time: int({ mode: "timestamp_ms" }),
    time: int({ mode: "timestamp_ms" }),
    convertion_time: int({ mode: "timestamp_ms" }),
    type: text(),
});
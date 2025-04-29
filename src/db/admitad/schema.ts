import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const admitAd = sqliteTable("admitad_postback", {
    id: int().primaryKey({ autoIncrement: true }),
    offer_id: text(),
    offer_name: text(),
    subid: text(),
    action: text(),
    action_id: text(),
    subid1: text(),
    subid2: text(),
    subid3: text(),
    subid4: text(),
    payment_sum: text(),
    payment_status: text(),
    reward_ready: text(),
    order_id: text(),
    order_sum: text(),
    click_time: text(),
    time: text(),
    convertion_time: text(),
    type: text(),
});
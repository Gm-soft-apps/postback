import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const mdeal = sqliteTable("mdeal_postback", {
    id: int().primaryKey({ autoIncrement: true }),
    offer_id: text(),
    transaction_id: text(),
    subid1: text(),
    subid2: text(),
    subid3: text(),
    subid4: text(),
    subid5: text(),
    convertion_time: int({ mode: "timestamp_ms" }),
    ip: text(),
})
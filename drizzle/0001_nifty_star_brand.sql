CREATE TABLE `mdeal_postback` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`offer_id` text,
	`transaction_id` text,
	`subid1` text,
	`subid2` text,
	`subid3` text,
	`subid4` text,
	`subid5` text,
	`convertion_time` integer
);
--> statement-breakpoint
ALTER TABLE `admitad_postback` ALTER COLUMN "click_time" TO "click_time" text;--> statement-breakpoint
ALTER TABLE `admitad_postback` ALTER COLUMN "time" TO "time" text;--> statement-breakpoint
ALTER TABLE `admitad_postback` ALTER COLUMN "convertion_time" TO "convertion_time" text;
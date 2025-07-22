CREATE TABLE `admitad_postback` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`offer_id` text,
	`offer_name` text,
	`subid` text,
	`action` text,
	`action_id` text,
	`subid1` text,
	`subid2` text,
	`subid3` text,
	`subid4` text,
	`payment_sum` text,
	`payment_status` text,
	`reward_ready` text,
	`order_id` text,
	`order_sum` text,
	`click_time` text,
	`time` text,
	`convertion_time` text,
	`type` text
);
--> statement-breakpoint
CREATE TABLE `mdeal_postback` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`offer_id` text,
	`transaction_id` text,
	`subid1` text,
	`subid2` text,
	`subid3` text,
	`subid4` text,
	`subid5` text,
	`convertion_time` integer,
	`ip` text
);

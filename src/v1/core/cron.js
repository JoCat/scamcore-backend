var CronJob = require("cron").CronJob;

new CronJob("0 0 */4 * * *", require("./cron/subscribe")).start();

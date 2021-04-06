require("./core/cron");

const express = require("express");
const ErrorHelper = require("./helpers/ErrorHelper");
const MailHelper = require("./helpers/MailHelper");
const DBHelper = require("./helpers/DBHelper");
const apiv1 = express.Router();

(async () => {
    try {
        console.log("[DB] Test connection...");
        await DBHelper.authenticate();
        console.log("[DB] Connection successfully established.");
    } catch (error) {
        console.error("[DB] Unable to connect to the database:", error);
        process.exit(1);
    }

    console.log("[DB] Synchronizing tables...");
    await DBHelper.sync();
    console.log("[DB] Tables synced successfully.");
    // require('./tests')

    try {
        console.log("[Mail] Test connection...");
        await MailHelper.verify();
        console.log("[Mail] Server is ready to take our messages.");
    } catch (error) {
        console.error("[Mail]", error);
        process.exit(1);
    }
})();

const langMiddleware = (req, res, next) => {
    if (
        req.params.lang !== undefined &&
        !["ru", "ua", "en"].includes(req.params.lang)
    ) {
        res.status(400).json(
            ErrorHelper.error(100, "Language parameter not specified")
        );
        return;
    }
    next();
};

// Роутинг апишки
apiv1.map = function (a, route = "") {
    for (const key in a) {
        switch (typeof a[key]) {
            // { '/path': { ... }}
            case "object":
                apiv1.map(a[key], route + key);
                break;
            // get: function(){ ... }
            case "function":
                apiv1[key](route, a[key]);
                break;
        }
    }
};

apiv1.map({
    "/subscribe": require("./handlers/subscribe"),
    "/modal-log": require("./handlers/modal-log"),
    "/feedback": require("./handlers/feedback"),
    "/:lang": {
        use: langMiddleware,
        "/isp": require("./handlers/isp"),
        "/servers": require("./handlers/servers"),
        "/reviews": require("./handlers/reviews"),
        "/data-centers": require("./handlers/data-centers"),
        "/hosting": require("./handlers/hosting"),
        "/offers": require("./handlers/offers"),
        "/advantages/:page": require("./handlers/advantages"),
    },
});

module.exports = apiv1;

const Server = require("./models/Server");
const ServerCPU = require("./models/ServerCPU");
const ServerGroup = require("./models/ServerGroup");
const ServerStorage = require("./models/ServerStorage");
const ServerTranslate = require("./models/translate/Server");
const ServerGroupTranslate = require("./models/translate/ServerGroup");

(async () => {
    await ServerGroup.create();

    await ServerGroupTranslate.create({
        ServerGroupId: 1,
        lang: "ru",
        title: "SAS VPS/VDS в ЕС (OpenVZ) ru",
    });

    await ServerGroupTranslate.create({
        ServerGroupId: 1,
        lang: "en",
        title: "SAS VPS/VDS в ЕС (OpenVZ) en",
    });

    await ServerGroupTranslate.create({
        ServerGroupId: 1,
        lang: "ua",
        title: "SAS VPS/VDS в ЕС (OpenVZ) ua",
    });

    await ServerCPU.create({
        title: "Intel Core I7-8700",
        frequency: 4.6,
        maxCores: 6,
    });

    await Server.create({
        ServerGroupId: 1,
        ServerCpuId: 1,
        type: "vds",
        cpuCoresCount: 1,
        ram: "2GB DDR4",
        traffic: "20TB/month",
        ddos: "Standart",
        geekbench: 20547,
        geekbenchMultithread: 30285,
    });

    await ServerTranslate.create({
        ServerId: 1,
        lang: "ru",
        price: 500,
    });

    await ServerTranslate.create({
        ServerId: 1,
        lang: "en",
        price: 5.5,
    });

    await ServerTranslate.create({
        ServerId: 1,
        lang: "ua",
        price: 25.8,
    });

    await ServerStorage.create({
        ServerId: 1,
        type: "ssd",
        capacity: 500,
    });
})();

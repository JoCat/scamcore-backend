const Server = require("../../models/Server");
const ServerCPU = require("../../models/ServerCPU");
const ServerStorage = require("../../models/ServerStorage");
const ServerTranslate = require("../../models/translate/Server");
const Subscribe = require("../../models/Subscribe");
const MailHelper = require("../../helpers/MailHelper");

module.exports = async () => {
    const servers = await Server.findAll({
        where: { type: "not-install" },
        include: [ServerTranslate, ServerStorage],
    });
    if (servers.length === 0) return;

    const cpus = await ServerCPU.findAll({
        where: {
            id: Array.from(new Set(servers.map((e) => e.ServerCpuId))),
        },
    });

    const serversList = servers.map((e) => {
        const r = {};
        r.cpuCoresCount = e.cpuCoresCount;
        r.ram = e.ram;
        r.cpu = cpus.find((c) => c.id === e.ServerCpuId).toJSON();
        r.price = e.ServerTranslates.find((e) => e.lang === "ru").price;
        r.storage = e.ServerStorages.map((s) => {
            return { type: s.type, capacity: s.capacity };
        });
        return r;
    });

    const mailTpl = MailHelper.getMailTemplate("send");
    const mailPart = MailHelper.getMailTemplate("parts/tableServer");

    const userList = await Subscribe.findAll();
    userList.forEach(async (user) => {
        if (user.code !== null) {
            if (new Date().getTime() - user.createdAt.getTime() >= 86400000) {
                await user.destroy();
            }
            return;
        }

        const tableServers = serversList.map((s) => {
            return mailPart
                .replace("{cpu}", s.cpu.title)
                .replace(
                    "{cores}",
                    `${s.cpuCoresCount} x ${s.cpu.frequency}GHz`
                )
                .replace("{ram}", s.ram)
                .replace(
                    "{storage}",
                    s.storage
                        .map((e) => `${e.capacity} GB ${e.type.toUpperCase()}`)
                        .join(" / ")
                )
                .replace("{dc}", "DataCenter") // TODO
                .replace("{location}", "ru") // TODO
                .replace("{price}", s.price)
                .replace("{count}", 1); // TODO
        });

        MailHelper.sendMail(
            user.email,
            "SpaceCore: Not-Install Servers",
            mailTpl.replace("{table_data}", tableServers.join(""))
        );
    });
};

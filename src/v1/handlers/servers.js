const { Request, Response } = require("express");
const Server = require("../models/Server");
const ServerCPU = require("../models/ServerCPU");
const ServerGroup = require("../models/ServerGroup");
const ServerStorage = require("../models/ServerStorage");
const ServerTranslate = require("../models/translate/Server");
const ServerGroupTranslate = require("../models/translate/ServerGroup");

/**
 * @param {Request} req
 * @param {Response} res
 */
async function getServers(req, res, type) {
    const vds = await Server.findAll({
        where: { type },
        include: [ServerTranslate, ServerStorage],
    });

    if (vds.length === 0) return res.json([]);

    const cpus = await ServerCPU.findAll({
        where: {
            id: Array.from(new Set(vds.map((e) => e.ServerCpuId))),
        },
    });

    const groups = await ServerGroup.findAll({
        where: {
            id: Array.from(new Set(vds.map((e) => e.ServerGroupId))),
        },
        include: ServerGroupTranslate,
    });

    const result = [];
    vds.forEach((e) => {
        const r = e.toJSON();

        r.cpu = cpus.find((c) => c.id === r.ServerCpuId).toJSON();
        delete r.ServerCpuId;

        group = groups
            .find((c) => c.id === r.ServerGroupId)
            .toJSON()
            .ServerGroupTranslates.find((e) => e.lang === req.params.lang);
        r.group = {
            id: group.ServerGroupId,
            title: group.title,
        };
        delete r.ServerGroupId;

        r.price = r.ServerTranslates.find(
            (e) => e.lang === req.params.lang
        ).price;
        delete r.ServerTranslates;

        r.storage = r.ServerStorages.map((e) => {
            return { type: e.type, capacity: e.capacity };
        });
        delete r.ServerStorages;

        result.push(r);
    });
    res.json(result);
}

module.exports = {
    "/vds": {
        get: (req, res) => {
            getServers(req, res, "vds");
        },
    },
    "/dedicated": {
        get: (req, res) => {
            getServers(req, res, "dedicated");
        },
    },
    "/not-install": {
        get: (req, res) => {
            getServers(req, res, "not-install");
        },
    },
};

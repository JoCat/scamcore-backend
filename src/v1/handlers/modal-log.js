const { Request, Response } = require("express");
const ModalLog = require("../models/ModalLog");

/**
 * @param {Request} req
 * @param {Response} res
 */
async function logRequest(req, res) {
    ModalLog.create({
        page: req.body.page,
        email: req.body.email,
    });

    res.sendStatus(200);
}

module.exports = {
    post: logRequest,
};

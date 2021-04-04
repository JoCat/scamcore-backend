const { Request, Response } = require("express");
const Subscribe = require("../models/Subscribe");
const MailHelper = require("../helpers/MailHelper");
const ErrorHelper = require("../helpers/ErrorHelper");
const { validate } = require("email-validator");

/**
 * @param {Request} req
 * @param {Response} res
 */
async function subscribe(req, res) {
    const email = req.body.email;

    if (email === undefined)
        return res
            .status(400)
            .json(ErrorHelper.error(200, "Email not specified"));
    if (!validate(email))
        return res.status(400).json(ErrorHelper.error(201, "Invalid email"));

    const checkSubscribe = await Subscribe.findOne({
        where: {
            email: email,
        },
    });

    if (checkSubscribe !== null)
        return res
            .status(400)
            .json(ErrorHelper.error(202, "Email already exist"));

    const code = require("crypto").randomBytes(4).toString("hex");

    Subscribe.create({
        email,
        code,
    });

    const tpl = MailHelper.getMailTemplate("verify");
    MailHelper.sendMail(
        email,
        "Хостинг SpaceCore",
        tpl.replace(/{code}/g, code)
    );

    res.sendStatus(200);
}

/**
 * @param {Request} req
 * @param {Response} res
 */
async function verify(req, res) {
    const code = req.body.code;

    const subscribe = await Subscribe.findOne({
        where: {
            code: code,
        },
    });

    if (subscribe == null)
        return res.status(400).json(ErrorHelper.error(203, "Invalid code"));

    subscribe.code = null;
    subscribe.save();

    res.sendStatus(200);
}

module.exports = {
    post: subscribe,
    "/verify": {
        post: verify,
    },
};

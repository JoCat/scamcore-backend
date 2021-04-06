const { Request, Response } = require("express");
const Feedback = require("../models/Feedback");

/**
 * @param {Request} req
 * @param {Response} res
 */
async function helpRequest(req, res) {
    Feedback.create({
        name: req.body.name,
        email: req.body.email,
    });

    res.sendStatus(200);
}

module.exports = {
    post: helpRequest,
};

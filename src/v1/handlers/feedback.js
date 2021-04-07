const { Request, Response } = require("express");
const Feedback = require("../models/Feedback");
const MailHelper = require("../helpers/MailHelper");
const ErrorHelper = require("../helpers/ErrorHelper");
const { get } = require("https");
const recaptcha = require("../config").recaptcha;

/**
 * @param {Request} req
 * @param {Response} res
 */
function helpRequest(req, res) {
    get(
        `https://www.google.com/recaptcha/api/siteverify?secret=${recaptcha}&response=${req.body.token}`,
        (response) => {
            response.on("data", async (r) => {
                r = JSON.parse(r.toString());
                if (!r.success || r.score < 0.5)
                    return res
                        .status(400)
                        .send(
                            ErrorHelper.error(
                                301,
                                "Вы не прошли проверку Recaptcha"
                            )
                        );

                const feed = await Feedback.create({
                    name: req.body.name,
                    email: req.body.email,
                });

                MailHelper.sendMail(
                    "admin@spacecore.pro",
                    "Новое заявление",
                    `Новое заявление ${feed.id}<br>Имя: ${req.body.email}<br>Почта: ${req.body.name}`
                );

                res.sendStatus(200);
            });
        }
    ).on("error", (e) => {
        res.status(400).send(
            ErrorHelper.error(
                300,
                "Ошибка! Код капчи не прошёл проверку на сервере. Обратитесь администратору для устранения неисправности."
            )
        );
        console.error(e);
    });
}

module.exports = {
    post: helpRequest,
};

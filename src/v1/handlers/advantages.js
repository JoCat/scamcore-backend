const { Request, Response } = require("express");
const Advantage = require("../models/Advantage");
const AdvantageTranslate = require("../models/translate/Advantage");

/**
 * @param {Request} req
 * @param {Response} res
 */
async function getAdvantages(req, res) {
    const a = await Advantage.findAll({
        where: {
            page: req.params.page,
        },
        include: AdvantageTranslate,
    });

    const result = a.map((e) => {
        const t = e.AdvantageTranslates.find((t) => t.lang === req.params.lang);
        return {
            id: e.id,
            title: t.title,
            image: e.image,
            text: t.text,
        };
    });

    res.json(result);
}

module.exports = {
    get: getAdvantages,
};

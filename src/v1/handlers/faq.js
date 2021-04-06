const { Request, Response } = require("express");
const Faq = require("../models/Faq");
const FaqTranslate = require("../models/translate/Faq");

/**
 * @param {Request} req
 * @param {Response} res
 */
async function getFaqs(req, res) {
    const Faqs = await Faq.findAll({
        where: {
            page: req.params.page,
        },
        include: FaqTranslate,
    });

    const result = Faqs.map((e) => {
        const t = e.FaqTranslates.find((t) => t.lang === req.params.lang);
        return {
            id: e.id,
            title: t.title,
            text: t.text,
            button: t.button,
        };
    });

    res.json(result);
}

module.exports = {
    get: getFaqs,
};

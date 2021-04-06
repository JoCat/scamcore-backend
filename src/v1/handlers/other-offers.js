const { Request, Response } = require("express");
const OtherOffer = require("../models/OtherOffer");
const OtherOfferTranslate = require("../models/translate/OtherOffer");

/**
 * @param {Request} req
 * @param {Response} res
 */
async function getOtherOffers(req, res) {
    const OtherOffers = await OtherOffer.findAll({
        where: {
            page: req.params.page,
        },
        include: OtherOfferTranslate,
    });

    const result = OtherOffers.map((e) => {
        const t = e.OtherOfferTranslates.find(
            (t) => t.lang === req.params.lang
        );
        return {
            id: e.id,
            title: t.title,
            list: t.list,
            link: t.link,
            url: e.url,
        };
    });

    res.json(result);
}

module.exports = {
    get: getOtherOffers,
};

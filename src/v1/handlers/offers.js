const { Request, Response } = require("express");
const Offer = require("../models/Offer");
const OfferTranslate = require("../models/translate/Offer");

/**
 * @param {Request} req
 * @param {Response} res
 */
async function getOffers(req, res) {
    const offers = await Offer.findAll({ include: OfferTranslate });

    const result = offers.map((e) => {
        const t = e.OfferTranslates.find((t) => t.lang === req.params.lang);
        return {
            id: e.id,
            percentage: e.percentage,
            image: e.image,
            start: e.start,
            end: e.end,
            url: e.url,
            title: t.title,
            // description: t.description,
        };
    });

    res.json(result);
}

module.exports = {
    get: getOffers,
};

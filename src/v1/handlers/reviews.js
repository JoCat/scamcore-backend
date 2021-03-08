const { Request, Response } = require('express')
const https = require('https')

/**
 * @param {Request} req 
 * @param {Response} res 
 */
async function getReviews(req, res) {
    const params = [
        'access_token=24e8b09924e8b09924e8b099c3249ecd80224e824e8b09944c5030f61208aafc4735aac',
        `lang=${req.params.lang}`,
        'v=5.130',
        'group_id=171073991',
        'topic_id=39268980',
        'extended=1',
    ]

    if (req.query.offset !== undefined && typeof req.query.offset === 'string') {
        params.push(`offset=${parseInt(req.query.offset) + 1}`)
    } else {
        params.push('offset=1')
    }

    let data
    try {
        data = JSON.parse(await readFile('https://api.vk.com/method/board.getComments?' + params.join('&'))).response
    } catch (error) {
        res.json({})
    }

    const last = data.items.length !== 20

    data.items = data.items.map((item, offset) => {
        if (item.text.length > 0) {
            const profile = data.profiles.find(p => p.id === item.from_id)

            return {
                text: item.text,
                date: item.date,
                offset: (parseInt(req.query.offset) || 0) + 1 + offset,
                name: `${profile.first_name} ${profile.last_name}`,
                screen_name: profile.screen_name || `id${item.from_id}`
            }
        }
    }).filter(e => e !== undefined);

    res.json({
        count: data.count,
        items: data.items,
        last
    })
}

function readFile(url) {
    return new Promise(function (resolve, reject) {
        https.get(url, (res) => {
            res.setEncoding("utf8")
            let data = ""
            res.on("data", (chunk) => {
                data += chunk
            })
            res.on("end", () => {
                resolve(data)
            })
        })
        .on("error", (err) => {
            reject(err)
        })
    })
}

module.exports = {
    get: getReviews
}
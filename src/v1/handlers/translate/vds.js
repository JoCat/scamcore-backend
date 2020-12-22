const getServers = require("../../helpers/getServers")

async function getTranslate(req, res) {
    const [vds] = await getServers('vds')
    res.json(vds)
}

module.exports = {
    get: getTranslate
}

const DB = require('./DBHelper')

module.exports = async function(type) {
    return await DB.query(
        'SELECT servers.id, servers.price, servers.cpu, servers.ram, servers.storage, servers.traffic, '+
        'servers.ddos, servers.geekbench, servers.geekbench_multithread, server_groups.name as group_name '+
        'FROM servers JOIN server_groups ON servers.group_id = server_groups.id WHERE type = ?', [type])
}
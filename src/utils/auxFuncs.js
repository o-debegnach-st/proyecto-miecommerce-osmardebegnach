const fs = require('fs');
const path = require('path');

const getUsers = () => JSON.parse(fs.readFileSync(path.resolve(__dirname,'../db/users.json'), "utf-8"))

module.exports = { getUsers }
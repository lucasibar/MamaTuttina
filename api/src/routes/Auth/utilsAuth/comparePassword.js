const bcrypt = require('bcrypt');

module.exports = async function comparePassword(password, recivedPassword){
    return await bcrypt.compare(password, recivedPassword)
};
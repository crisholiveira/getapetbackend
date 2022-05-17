const User = require('../models/Users')

module.exports = class UserController {
    static async register (req, res) {
        res.json('Olá Get a Pet')
    }
}
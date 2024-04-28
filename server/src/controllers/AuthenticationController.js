const { User } = require('../models')
const { grape } = require('../models')

console.log('Attempting to import: ', User)

module.exports = {
  async register (req, res) {
    console.log(`Register End Point Hit. With Request: ${req.body.email}`)
    console.log('Model User: ', User)
    console.log('Model grape: ', grape)

    try {
      const userData = await User.create(req.body)
      res.send(userData.toJSON())
    } catch (err) {
      res.status(400).send({
        error: 'This email account is already in use'
      })
    }
  }
}

const { user } = require('../models')

module.exports = {
  async register (req, res) {
    console.log(`Register End Point Hit. With Request: ${req.body.email}`)
    console.log('Model User: ', user)

    const userData = await user.create(req.body)
    try {
      res.send(userData.toJSON())
    } catch (err) {
      res.status(400).send({
        error: 'This email account is already in use'
      })
    }
  }
}

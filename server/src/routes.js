const AuthenticationController = require('./controllers/AuthenticationController')

module.exports = (app) => {
  app.get('', (req, res) => {
    res.send({
      message: 'Hello There, are you ready to code!'
    })
  })

  app.get('/status', (req, res) => {
    res.send({
      message: 'status pinged!'
    })
  })

  app.post('/register', AuthenticationController.register)
}

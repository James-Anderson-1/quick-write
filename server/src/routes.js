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

  app.post('/register', (req, res) => {
    console.log(`Register End Point Hit. With Request: ${req.body.email}`)

    res.send({
      message: `Hello! You are registered with email: ${req.body.email}!`
    })
  })
}

console.log('hello')
console.log('Running with Enviroment Variables:')
console.log(process.env)
console.log('Pulling Railway Enviroment Varaible')
console.log(process.env.TEST_ENV_VARIABLE || 'failed to pull env var ')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

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

app.listen(process.env.PORT || 8081)
console.log('Running on port 8081')
console.log('For local netwrok: http://localhost:8081')

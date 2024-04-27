console.log('hello')
console.log('Running with Enviroment Variables:')
console.log(process.env)
console.log('Pulling Railway Enviroment Varaible: ', process.env.TEST_ENV_VARIABLE || 'failed to pull env var ')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const config = require('./config/config')

console.log('Right Before sequelizer Stuff............')
const { sequelize } = require('./models')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)

sequelize.sync()
  .then(() => {
    app.listen(config.port)
    console.log(`Running on port ${process.env.PORT}`)
    console.log('For local netwrok: http://localhost:8081')
  }
  )

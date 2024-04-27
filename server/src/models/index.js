const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')
const db = {}

let sequelize

if (process.env.DEPLOYED === 'True') {
  sequelize = new Sequelize(process.env.POSTGRES_URL)
} else {
  sequelize = new Sequelize(
    config.db.database,
    config.db.username,
    config.db.password,
    config.db.options
  )
}

fs
  .readdirSync(__dirname)
  .filter((file) =>
    file !== 'index.js' &&
    file.slice(-3) === '.js' // Filter out only JavaScript files
  )
  .forEach((file) => {
    const modelName = file.replace('.js', '') // Get the model name from the filename
    const model = require(path.join(__dirname, file))(sequelize, Sequelize)
    console.log('Model File Name:', modelName) // Log the model name for debugging
    db[modelName] = model
  })

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db

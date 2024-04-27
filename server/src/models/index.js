const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')
const db = {}

const sequelize = new Sequelize(
  config.db.database,
  config.db.username, // changed from config.db.user
  config.db.password,
  config.db.options,
//   config.db.port,
//   config.db.host
)

fs
  .readdirSync(__dirname)
  .filter((file) =>
    file !== 'index.js' &&
    file.slice(-3) === '.js' // Filter out only JavaScript files
  )
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize)
    console.log(model)
  })

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db

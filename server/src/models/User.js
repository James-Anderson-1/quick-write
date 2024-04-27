module.exports = (sequelize, DataTypes) => {
  sequelize.define('npm_sequelize_3', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING
  })
}

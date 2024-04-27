module.exports = (sequelize, DataTypes) => {
  return sequelize.define('user', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING
  })
}

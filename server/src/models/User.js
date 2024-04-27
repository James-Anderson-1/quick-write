module.exports = (sequelize, DataTypes) => {
  sequelize.define('npm_sequelize', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING
  })
}

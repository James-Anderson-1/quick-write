module.exports = (sequelize, DataTypes) => {
  sequelize.define('article', {
    title: {
      type: DataTypes.STRING,
      unique: true
    },
    caption: {
      type: DataTypes.STRING
    },
    keywords: {
      type: DataTypes.STRING
    },
    body: {
      type: DataTypes.STRING
    }
  })
}

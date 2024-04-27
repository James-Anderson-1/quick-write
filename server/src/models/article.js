module.exports = (sequelize, DataTypes) => {
  return sequelize.define('article', {
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

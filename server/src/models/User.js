module.exports = (sequelize, DataTypes) => {
  try {
    const User = sequelize.define('user', {
      email: {
        type: DataTypes.STRING,
        unique: true
      },
      password: DataTypes.STRING
    })
    return User
  } catch (error) {
    console.error('Error occurred while defining user model:', error)
    // Optionally, you can provide a default value or fallback behavior here
    return null
  }
}

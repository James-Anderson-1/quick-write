module.exports = (sequelize, DataTypes) => {
  try {
    const User = sequelize.define('User', {
      email: {
        type: DataTypes.STRING,
        unique: true
      },
      password: DataTypes.STRING
    })
    console.log('Finished genrating user.', User)
    return User
  } catch (error) {
    console.error('Error occurred while defining user model:', error)
    // Optionally, you can provide a default value or fallback behavior here
    return null
  }
}

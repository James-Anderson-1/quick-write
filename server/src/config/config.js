module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'postgres',
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'gold',
    options: {
      host: process.env.HOST || 'localhost',
      port: process.env.DB_PORT || "5433",
      dialect: process.env.DIALECT || 'postgres',
      // storage: '99999'
    }
  }
}

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: process.env.DATABASE_URL || 'g_read',
    }
  },

  test: {
    client: 'pg',
    connection: {
      database: process.env.DATABASE_URL || 'g_read',
    }
  }

};

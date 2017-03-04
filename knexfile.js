module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost:5432/movie_api',
  },
  production: {
    client: 'pg',
    connection: {
      database: 'postgres://localhost:5432/movie-api',
      user: 'ec2-user',
    }
  }
};

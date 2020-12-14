module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', 'durvbryvdw2sjcm5.cbetxkdyhwsb.us-east-1.rds.amazonaws.com'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'khsbh3zpl8yhy9d2'),
        username: env('DATABASE_USERNAME', 'nr5thw02e30x0ilt'),
        password: env('DATABASE_PASSWORD', 'zw5pksihqrgujgnl'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});

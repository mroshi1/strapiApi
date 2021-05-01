module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'bancoerrera'),
        username: env('DATABASE_USERNAME', 'rajovi'),
        password: env('DATABASE_PASSWORD', 'rajovi123'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});

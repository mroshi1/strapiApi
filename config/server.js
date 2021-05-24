module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 5500),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'dde6748f3b3cd2aac2498cbc3e83087f'),
    },
  },
});

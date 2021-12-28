module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'cf9ff5a12f04845522a32dc3058f712d'),
  },
});

module.exports = ({ env }) => {
  const isProd = env('ENVIRONMENT') === 'PROD';

  return {
    url: isProd ? env('PUBLIC_URL', 'https://angeld.xyz/strapi') : undefined,
    proxy: isProd,
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    app: {
      keys: env.array('APP_KEYS'),
    },
    webhooks: isProd ? undefined : {
      populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
    },
    admin: {
      url: '/strapi/admin', // Explicitly set admin URL
      serveAdminPanel: true,
    },
  };
};
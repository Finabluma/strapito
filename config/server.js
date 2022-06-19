module.exports = ({ env }) => ({
  host: env('HOST'),
  port: env.int('PORT'),
  app: {
    keys: env.array('APP_KEYS'),
  },
  url: env('PUBLIC_URL'),
  proxy: env.bool('IS_PROXIED', true),
  cron: {
    enabled: env.bool('CRON_ENABLED'),
  },
});

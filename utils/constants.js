const path = require('path');

const { ENV = 'test', CI } = process.env;

if (!CI) {
  require('dotenv').config({ path: path.resolve(`.env.${ENV}`) });
}

const { DOMAIN_USER, DOMAIN_API_KEY, DOMAIN_DOMAIN, DOMAIN_API_HOST, DOMAIN_API_PORT } = process.env;

const IS_TEST = ENV === 'test';

module.exports = {
  ENV,
  VALID_RECORD_TYPES: ['CNAME', 'A', 'ALIAS', 'URL'],
  DOMAIN_DOMAIN: DOMAIN_DOMAIN || 'booboo.xyz',
  DOMAIN_USER: IS_TEST ? 'testuser' : DOMAIN_USER,
  DOMAIN_API_KEY: IS_TEST ? 'testkey' : DOMAIN_API_KEY,
  DOMAIN_API_HOST: IS_TEST ? 'example.com' : DOMAIN_API_HOST,
  DOMAIN_API_PORT: IS_TEST ? 6969 : DOMAIN_API_PORT,
  TTL: 5*60, // TODO: Increase ttl
};

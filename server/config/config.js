var SECRETS = require('secrets.js');

module.exports = {
  'port' : process.env.PORT || 8080,
  'database' : SECRETS.database;
}

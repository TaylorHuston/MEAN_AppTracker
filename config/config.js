var SECRETS = require('./secrets');


module.exports = {
  'port' : process.env.PORT || 8080,
  'database' : SECRETS.database
}

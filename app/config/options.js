exports = module.exports = function(env) {

  // Options
  
  var TWO_WEEKS = 14 * 24 * 60 * 60 * 1000;
  
  var option_tables = {
    development: function() {
      this.maxAge = TWO_WEEKS;
      this.shortSession = TWO_WEEKS;
      this.reqTimeout = 30000;
      this.sessionKey = 'b0ilerplate';
      this.logged_in_homepage = '/users/show';
      this.host = 'http://localhost:3100';
      this.port = 3100;
      this.dumpExceptions = true;
      this.showStack = true;
      this.errorToHtml = true;
      this.redis = { host: 'localhost', port: 6379, db: 'boilerplate' }
      this.mongo = { db: 'mongodb://localhost/boilerplate'}
    },
    test: function() {
      this.mongo = { db: 'mongodb://localhost/boilerplate_test' };
      this.redis = { host: 'localhost', port: 6379, db: 'boilerplate_test' };
      this.port = 8000;
    },
    staging: function() {
      this.dumpExceptions = false;
      this.errorToHtml = false;
    },
    production: function() {

    }
  }
  
  // Cascade options
  
  option_tables.test.prototype = new option_tables.development();
  option_tables.staging.prototype = new option_tables.development();
  option_tables.production.prototype = new option_tables.development();

  return new option_tables[env]();
  
};
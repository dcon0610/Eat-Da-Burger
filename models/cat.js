// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all( function(res) {
      cb(res);
    });
  },

  create: function( vals, cb) {
    orm.create( vals, function(res) {
      cb(res);
    });
  },
  devour: function(id, cb) {
    orm.devour(id, function(res) {
      cb(res);
    });
  },
  
};

module.exports = burger;

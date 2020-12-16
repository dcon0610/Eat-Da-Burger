// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {
  all: function(cb) {
    var queryString = "SELECT * FROM burgers ";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result)
    });
  },

  
  create: function( vals, cb) {
    var queryString = "INSERT INTO burgers (name, devoured) Values (?)";
 

    console.log(queryString);

    connection.query(queryString, [vals], function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  devour: function(id, cb) {
    var queryString = "UPDATE burgers set devoured = 1 where id= ?" 

    connection.query(queryString, id,  function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

// Export the orm object for the model (cat.js).
module.exports = orm;

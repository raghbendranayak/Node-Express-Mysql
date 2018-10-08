/************INIT MONGOOSE START***************/
var mysql = require('mysql');

var settings = require('../settings');

var con = mysql.createConnection({ 
 	host: "localhost",
 	user: "root",
 	password: "",
 	database: "db_nodeapp"
});

con.connect(function(err) {
  if (err) {
  	console.log ('ERROR connecting to: ' + '. ' + err);
  } else {
  	console.log ('Succeeded connected to MySql');
  }
});
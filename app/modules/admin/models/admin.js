var mysql= require("mysql");

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

var User = {}

/*User.createUser = function createUser(newUser) {
    bcrypt.genSalt(10, function(err, salt){
        bcrypt.hash(newUser.password,salt, function (err, hash) {
            newUser.password = hash;
            var query = sql.query("INSERT INTO USERS set ?", newUser, function (err, res) {
                console.log(query);
                if(err) {
                    console.log("error");
                }
                else{

                    console.log(res.insertId);
                }
            });
        });
    });

}*/

module.exports= { user: User };
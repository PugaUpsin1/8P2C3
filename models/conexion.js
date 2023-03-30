const mysql = require('mysql2');
var sqlConnection = mysql.createConnection({
    host: "localhost",
    user: 'root',
    database: 'sistemapuga',
    password:''
});
sqlConnection.connect(function(err){
    if(err){
        console.log(err.message)
    }else{
    console.log("Conexion exitosa");
    }
});
module.exports=sqlConnection;
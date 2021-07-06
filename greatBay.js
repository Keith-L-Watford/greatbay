// inquirer
const inquirer = require('inquirer');
require('dotenv').config()

// mysql
const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  port     : 3306,  
  user     : process.env.DB_USER,
  password : process.env.DB_PASS,
  database : process.env.DB_NAME,
});

const letsGo = () => {
    inquirer.prompt({

    })
connection.end()
}



connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);
    letsGo();
}) 
// inquirer
const inquirer = require('inquirer');
require('dotenv').config()

// mysql
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});

const letsGo = () => {
    inquirer.prompt([{
        type: 'list',
        message: 'Would you like to sell or buy an item?',
        choices: ['Buy', 'Sell'],
        name: 'buyOrSell',
    }, ])

    .then((data) => {
        if (data.buyOrSell === 'Buy') {
            weBuying()
        } else {
            weSelling()
        }
    })
    // connection.end()
}


const weBuying = () => {
    console.log('Here are our current listed itmes...\n');
    connection.query('SELECT * FROM items', (err, res) => {
        if (err) throw err;
        console.table(res)


        
        inquirer.prompt([{
            
        }])
        connection.end()
    });
};



connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);
    letsGo();
})
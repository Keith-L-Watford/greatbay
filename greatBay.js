// inquirer
const inquirer = require('inquirer');
require('dotenv').config()

// mysql
const mysql = require('mysql');
const { resourceLimits } = require('worker_threads');
// THIS IS HOW IT CONNECTS
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
            choices: ['Buy', 'Sell', 'Exit'],
            name: 'buyOrSell',
        }, ])

        .then((data) => {
            if (data.buyOrSell === 'Buy') {
                weBuying();
            } else if (ata.buyOrSell === 'Sell'){
                weSelling();
            } else {
                connection.end();
            }
        });
};


const weBuying = () => {
    connection.query('SELECT * FROM items', (err, res) => {
        if (err) throw err;

        inquirer.prompt([
            {
            name: "availableItems",
            type: 'rawlist',
            choices() {
                const anArrayForItems = [];
                res.forEach(({ item_name }) => {
                    anArrayForItems.push(item_name);
                });
                return anArrayForItems;
            },
            message: 'Which item would you like to bid on?',
            }
        ])
    })

        // connection.end()
};



connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);
    letsGo();
})
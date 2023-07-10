import mysql from 'mysql2';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '2013',
    database: 'todoapp'
});

connection.connect((err)=>{
    return err ? console.error('error: ',err.message) : console.log("Connection Established!");
})

 
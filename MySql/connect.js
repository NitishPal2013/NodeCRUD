/**
 * Reason to change the module from mysql to mysql2
 * Latest MySql supports caching_sha2_password authentication method instead
 * of mysql_native_password.
 * mysql does not support the latest cryptic method to authenticate .
 * Three Options to solve this is available here :
 * https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server
 */

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

 
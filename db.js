const mysql = require('mysql2');

// conexión a la base de datos en AWS RDS
const connection = mysql.createConnection({
  host: 'databaselunes.ctuy6qwqa8w5.us-east-2.rds.amazonaws.com',
  user: 'admin', 
  password: 'root2025', 
  database: 'Sisa', 
  port: 3306
});

// Verificacion de la conexión
connection.connect((err) => {
  if (err) {
    console.error('Error de conexión: ', err);
    return;
  }
  console.log('Conexión exitosa a la base de datos!');
});


module.exports = connection;
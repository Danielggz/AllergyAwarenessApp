const express = require('express');
const bodyParser = require('body-parser')
const app = express();
// var fs = require('fs');
const port = 3000;

// Serve static files
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "html/index.html"));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, "html/login.html"));
});

app.get('/realTimeDetection', (req, res) => {
  res.sendFile(path.join(__dirname, "html/realTimeDetection.html"));
});

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, "html/register.html"));
});

app.get('/settings', (req, res) => {
  res.sendFile(path.join(__dirname, "html/settings.html"));
});

app.get('/dbInfo', (req, res)=>{
    const mysql = require('mysql')
    //Database connection to the Allergy Awareness App database
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'allergyawarenessapp'
    })

    connection.connect(function(error){
      if(error)
         throw error;
      else
         console.log('Connected to database.');
    });

    //Get barcode from the front side (post request includes the barcode)
    // var barcode = req.body.barcode;
    var barcode = "4056489314851";
    var data;

    //Query the barcode to the database table 'products'
    connection.query("SELECT * from products where barcode = '" + barcode + "'", (err, rows, fields) => {
    if (err) throw err

    //Display results in console
    console.log('The solution is: ', rows)
    data = rows;
    })

    connection.end()

    res.send(JSON.stringify(data));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const port = 3000;

// Serve static files
app.use(express.static('public'));

// create application/json parser
var jsonParser = bodyParser.json();
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(jsonParser);
app.use(urlencodedParser);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post('/dbInfo', (req, res)=>{
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
    var barcode = req.body.barcode;
    //var barcode = "4056489314851";
    var data;

    //Query the barcode to the database table 'products'
    connection.query("SELECT * from products where barcode = '" + barcode + "'", (err, data, fields) => {
    if (err) throw err

    //Display results in console
    console.log(data);
    res.send(JSON.stringify(data));
    })

    //End connection to db
    connection.end()    
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
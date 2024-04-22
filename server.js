const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const port = 3000;

// Serve static files
app.use(express.static('public'));

// Create jsonparser to use in post requests
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

    //Query the barcode to the database table 'products'
    connection.query("SELECT * from products where barcode = '" + barcode + "'", (err, data, fields) => {
    if (err) throw err

    //Display results in console
    res.send(JSON.stringify(data));
    })

    //End connection to db
    connection.end()    
});

app.post('/newUser', (req, res)=>{
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

  var name = req.body.name;
  var surname = req.body.surname;
  var email = req.body.email;
  var symptoms = req.body.symptoms;

  //Query the barcode to the database table 'products'
  connection.query("INSERT INTO users(user_name, user_surname, email) VALUES('" + name + "', '" + surname + "', '" + email + "')", (err, data, fields) => {
  if (err) throw err

  //Send back success message
  res.send(JSON.stringify("Data inserted!"));
  })

  //End connection to db
  connection.end()    
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
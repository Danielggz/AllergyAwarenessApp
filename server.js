const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const port = 3000;
var sessionID = 0; //store session of user id

// Serve static files
app.use(express.static('public'));

// Create jsonparser to use in post requests
var jsonParser = bodyParser.json();
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: true });
app.use(jsonParser);
app.use(urlencodedParser);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "public/login.html"));
});

app.post('/login', (req, res) => {
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

    var username = req.body.username;
    var password = req.body.password;

    //Query to insert new user in db
    connection.query("SELECT * from users where user_name = '" + username + "' and password = '" + password + "'", (err, data, fields) => {
    if (err) throw err

    //Store id of current user in session
    if(typeof data !== 'undefined' && data.length > 0){
      sessionID = data[0].id;
    }
    
    //Send results back if there is not errors
    res.send(JSON.stringify(data));
    })

    //End connection to db
    connection.end()  
})

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
  if(name.indexOf(' ') >= 0){
    connection.end();
    //Send error message if there are spaces in name
    res.send(JSON.stringify({"msg": "Name must not have spaces"}));
  }
  var surname = req.body.surname;
  var password = req.body.password;
  var email = req.body.email;
  var newsletter = req.body.newsletter;

  //Query the barcode to the database table 'products'
  connection.query("INSERT INTO users(user_name, user_surname, email, password, newsletter) VALUES('" + name + "', '" + surname + "', '" + email + "', '" + password + "', " + newsletter + ")", (err, data, fields) => {
  if (err) throw err

  console.log(data);
  res.send(JSON.stringify("Data inserted!"));
  })

  //End connection to db
  connection.end()    
});

app.post('/allergyRegister', (req, res)=>{
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

  var symptomList = req.body.symptoms;
  console.log(symptomList);

  //loop symptom adding
  for(let i=0; i<symptomList.length; i++){
    symptom = symptomList[i];
    console.log(symptom)
    connection.query("INSERT INTO symptoms(idUser, symptom) VALUES(" + sessionID + ", '" + symptom + "')", (err, data, fields) => {
      if (err) throw err
    })
  }
  
  //Send back success message
  res.send(JSON.stringify("Data inserted!"));
  

  //End connection to db
  connection.end()    
});

app.get('/getCurUser', (req, res)=>{
  //Get current user with the sessionId variable
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

    connection.query("SELECT * from users where id = " + sessionID, (err, data, fields) => {
      if (err) throw err
      res.send(JSON.stringify(data));
    })

    //End connection to db
    connection.end() 
});

app.get('/testing', (req, res)=>{
  res.status(200).send({"message": "Message delivered"});
});

var server = app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

//Export server to testing
module.exports = server;
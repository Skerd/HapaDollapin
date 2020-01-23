const express = require ('express');
const mongoose = require ('mongoose');
const config = require('config');

const app = express();

//Body-Partes Middleware
app.use(express.json());

//DB config


const databaseUser =  config.get('databaseUser');
const databasePassword = config.get('databasePassword');
const databaseName = config.get("databaseName");
const db = config.get('mongoURI').replace("<database>",databaseName).replace("<username>", databaseUser).replace("<password>", databasePassword);


//Connect to Mongo
mongoose
    .connect(db , {
        useUnifiedTopology: true, 
        useNewUrlParser: true,
        useCreateIndex: true
    })
    .then( ()=> console.log('MongoDb Connected...'))
    .catch( err => console.log(err));

//Use routes
app.use('/api/clinics', require('./routes/api/clinics'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log(`Server started on port ${port}`));


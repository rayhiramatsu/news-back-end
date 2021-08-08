//---------- Dependencies ----------//
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const db = mongoose.connection;
require('dotenv').config();

//---------- Configuration ----------//
const app = express();
const PORT = process.env.PORT || 3000;
// const PORT = 3000;

//---------- Middleware ----------//
app.use(express.json());
app.use(cors());

//---------- Database ----------//
const MONGODB_URI = process.env.MONGODB_URI

//connect to mongo
mongoose.connect(
    MONGODB_URI,
    // 'mongodb://localhost:27017/newsdb',
    {
        useNewUrlParser: true,

    }
);

/*
    I think the below block is functionally identical to the db.on('connected') line
*/

// mongoose.connection.once('open', ()=>{
//     console.log('connected to mongod...');
// });

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

//---------- Controllers ----------//
const boardController = require('./controllers/board_controller.js');
app.use('/', boardController);

//---------- Routes ----------//
// none! not here anyway

//---------- Listener ----------//

app.listen(PORT, ()=>{
    console.log('🍀 Listening on port 🍀', PORT);
})

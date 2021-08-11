//---------- Dependencies ----------//
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');
const db = mongoose.connection;
require('dotenv').config();

//---------- Configuration ----------//
const app = express();
const PORT = process.env.PORT || 3000;
// const PORT = 3000;

//---------- Middleware ----------//
app.use(express.json());
app.use(cors());
app.use(
    session({
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: false
    })
);

//---------- Database ----------//
const MONGODB_URI = process.env.MONGODB_URI

//connect to mongo
mongoose.connect(
    MONGODB_URI,
    // 'mongodb://localhost:27017/newsdb',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }
);



// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

//---------- Controllers ----------//
const postsController = require('./controllers/posts_controller.js');
app.use('/', postsController);

const userController = require('./controllers/user_controller.js');
app.use('/users', userController);

const sessionsController = require('./controllers/sessions_controller.js');
app.use('/sessions', sessionsController);

const commentsController = require('./controllers/comments_controller.js');
app.use('/comments', commentsController);

//---------- Routes ----------//
// none! not here anyway

//---------- Listener ----------//

app.listen(PORT, ()=>{
    console.log('🍀 Listening on port 🍀', PORT);
})

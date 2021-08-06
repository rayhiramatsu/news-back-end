//---------- Dependencies ----------//
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


//---------- Configuration ----------//
const app = express();
const PORT = 3000;

//---------- Middleware ----------//
//---------- Database ----------//
//---------- Controllers ----------//
//---------- Routes ----------//
//---------- Listener ----------//

app.listen(PORT, ()=>{
    console.log('🍀 Listening on port 🍀', PORT);
})

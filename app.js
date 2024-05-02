const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const homeRouter = require('./routes/homeRoutes')

const app  = express();
const port  = process.env.PORT || 4000;

// db connection 
// mongoose.connect("mongodb://localhost/crud_for_youtube",{useNewUrlParser : true})


/****************
**********************       PLASE NOTE  
***************************
****************************************************************

 in latest Node is Version localhost not
  working you have to use 127.0.0.1 for runing database

************************************************************8
*****************************************************
*********************************
************************/



mongoose.connect("mongodb://localhost:27017",{useNewUrlParser : true})
const db = mongoose.connection;
db.on("error",()=>{console.log("err");})
db.once("open",()=>{console.log("Conected");})


app.set('view engine','ejs')

app.use(express.static('public'))



// body parser 

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


// routing home route
app.use('/',homeRouter)


app.listen(port,()=>{
    console.log("Server is Runing");
})










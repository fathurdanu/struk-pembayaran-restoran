require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const routes = require('./routes');
app.use(routes);
app.use(express.static(__dirname + '/public'))

app.listen(port, ()=>{
    console.log(`port: ${port}`);
})
const express = require('express');
const bodyParser = require('body-parser');
require("dotenv").config();
const database = require('./utils/database');
const router = require('./routes/reports-route');



const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/nearby', router);

app.get('*', (req,res) => {
    res.status(404).send({"Message":"Route Not Found"});
});


app.listen(3000);
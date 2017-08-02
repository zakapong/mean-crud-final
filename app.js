//importing modules
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

const route = require('../route');

// port no
const port = 3000;

//adding middleware -cors
app.use(cors());

//body parser
app.use(bodyparser.json());

// static files
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use('/api', route);

//testing server
app.get('/', (req, res) => {
    res.send('Samsu');
});

app.listen(port, () => {

    console.log('Server started port ' + port);
});

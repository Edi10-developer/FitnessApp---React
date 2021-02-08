const express = require('express');
const API = express();
const MORGAN = require('morgan');


// Settings
API.set('port', process.env.PORT || 2000);
API.set('json spaces', 2);

// Middlewares
API.use(MORGAN('dev'));
API.use(express.urlencoded({extended: false}));
API.use(express.json());


// Routes
API.use(require('./routes/index'));
API.use('/api/exercises', require('./routes/exercises'));

// Starting Server
API.listen(API.get('port'), () => {
    console.log(`server on port ${API.get('port')}`);
});


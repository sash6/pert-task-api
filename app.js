require('./db');
const express = require('express')
const app = express()
// const path = require('path');
const port = process.env.PORT || 3000

var cors = require('cors');
app.use(cors());

var formCtrl = require('./controllers/form.controller');

//configuring body-parser middleware to our application
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port, () => console.log(`App listening on port!!!! ${port}`))


app.post('/api/user/save/form', formCtrl.saveForm)



app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
    // res.send('Not found')
});

// error handler middleware
app.use((error, req, res, next) => {
    res.status(error.status || 500).send({
        error: {
            status: error.status || 500,
            message: error.message || 'Internal Server Error',
        },
    });
});

module.exports = app;
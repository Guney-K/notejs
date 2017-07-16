/* Deifne reuired modules */
var exp = require('express'),
mongo = require('mongoose'),
mustache = require('mustache-express'),
bParser = require('body-parser'),
app = exp();

/* Global variables */
var PORT = 3000;

/* Set view engine as mustache with .mus file extension */
app.engine('mus', mustache());
app.set('view engine', 'mus');

/* TODO: Database connection 
mongo.connect('mongodb://localhost/notejsDB');
*/

/* Set routers */
app.use(require('./routes/index.js'));
app.use(require('./routes/global404.js'));


/* Start server */
app.listen(PORT, function(){
    console.log("Server has initialized at port number "+ PORT);
});
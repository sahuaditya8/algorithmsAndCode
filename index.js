const express = require('express');
const bodyparser = require('body-parser');
const {check, validationResult, body} = require('express-validator');

const app = express();
const port = 8081;
var a = 10;
function isPrime(n) {
   let divisor = 2;

   while (n > divisor) {
       if (n % 2 == 0) {
           return false;
       } else {
           divisor++;
       }
       return true;
   }
}

console.log(isPrime(33));

app.set('view engine', 'ejs');

const urlencodedParser = bodyparser.urlencoded({ extended: false});

app.use(express.static('public'));

// This responds with "Hello World" on the homepage
app.get('', function (req, res) {
   res.render('index');
})

app.get('/register', function (req, res) {
    res.render('register');
})

app.get('/algorithms', function (req, res) {
   res.render('algorithms');
})

app.get('/algorithms/basic/primeNumber', function (req, res) {
   res.render('algorithms/basic/primeNumber');
})

// This responds a POST request for the homepage
app.post('/register', urlencodedParser, [
    check('username', 'This username must have 5+ characters')
    .exists()
    .isLength({ min: 5})
], function (req, res) {
   console.log("Got a POST request for the homepage");

   const errors = validationResult(req);

   if(!errors.isEmpty()){
       return res.status(422).jsonp(errors.array())
   }else {
    res.json(req.body);
   }
})

var server = app.listen(port, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})
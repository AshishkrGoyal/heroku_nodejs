const express = require('express');

const app = express();
const port = process.env.PORT || 8000;

app.listen(port, function (err) {
    if(err){
        console.log("error while starting server");
    }
    else{
        console.log("server has been started at "+port);
    }
});

app.get('/', function (req, res) {
   res.send('We are at the root route of our server');
});
const express = require('express');
const bodyParser = require('body-parser');
const md5 = require('md5');
const port = 443;
const app = express();
const fs = require('fs')
const https = require('https')

let invalidloginAttemps = 0;

app.use(express.static('public'));
app.use(bodyParser.json());
app.get('/', (req,res)=>{
    res.send("Hello browser");
});

app.post('/login',(req,res) => {
    console.log(JSON.stringify(req.body));
    if(invalidloginAttemps>=5) {
        res.status(401); 
    }
    else if (req.body.userName =="aquaisie" && md5(req.body.password) =="10f6c2a880d21c337f52fdc71581029a"){
        res.send("Welcome!")
    }
    else{
        invalidloginAttemps++;
        console.log(invalidloginAttemps+" invalid attemps");
        res.status(401); //unauthorized
        res.send("Who are you?")
    }
})

//app.listen(port, ()=>{});

https.createServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert'),
    passphrase: "P@ssw0rd"
  }, app).listen(443, () => {
    console.log('Listening...')
  });
const express = require('express');
const bodyParser = require('body-parser');
const md5 = require('md5');
const port = 443;
const app = express();
const fs = require('fs')
const https = require('https')

app.use(express.static('public'));
app.use(bodyParser.json());
app.get('/', (req,res)=>{
    res.send("Hello browser");
});

app.post('/login',(req,res) => {
    console.log(JSON.stringify(req.body));
    if (req.body.userName =="aquaisie" && md5(req.body.password) =="1c42f9c1ca2f65441465b43cd9339d6c"){
        res.send("Welcome!")
    }
    else{
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
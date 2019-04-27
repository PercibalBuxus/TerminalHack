var fs = require('fs');
var passwords = JSON.parse(fs.readFileSync('passwords.json', 'utf8'));

const express = require('express')
const cors = require('cors')
const http = require('http');
const app = express();

var corsOptions = {
	'Access-Control-Allow-Origin': '*',
	origin: 'localhost:4200',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}


var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

app.use(cors(corsOptions))

const bodyParser = require('body-parser')
app.use(bodyParser.json())

let port = undefined;

server = http.createServer(app);
app.head(`<meta http-equiv="Content-Security-Policy" content="default-src *; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval' http://www.google.com">`)
if(process.env.PORT){
  server.listen(process.env.PORT);
  port = process.env.PORT
}
else{
  port = 3000
  server.listen(3000);
}
console.log(`Server is listening on port ${port}`);

app.route('/passwords').get((req,res) => {
    console.log('GET passwords')
    let size = req.query.size;
    let quantity = req.query.quantity;

    let ret = passwords[size-4]
    //console.log(ret);

    var j, temp;
    for (i = ret.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = ret[i];
      ret[i] = ret[j];
      ret[j] = temp;
    }
    //console.log(ret);
    let returned = new Array(quantity)

    for(var i = 0; i < quantity; i++){
        returned[i] = ret[i];
    }

    res.send(returned);
})
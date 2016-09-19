var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var session = require('express-session')
var config = require('./config')
var masterCtrl = require('./controllers/masterCtrl')


var app = express()

app.use(bodyParser.json())
app.use(cors())
app.use(session({
  secret: config.sercret
}))

app.use(express.static( __dirname + '/public' ))

app.get('/api/stuff', masterCtrl.getThings)

var port = 9001
app.listen(port , function(){
  console.log("its over " , (port -1) , "!" );
})

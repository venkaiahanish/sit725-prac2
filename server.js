var express = require('express')
var app = express()
//storing data in array
let arrays = [
    {id:1,name: 'alex',deposit:5},
    {id:2,name: 'sarah',deposit:5},
    {id:3,name: 'jim',deposit:15}
]
//retriving the data from array
app.get('/', function (req, res) {
    app.send(arrays);
})



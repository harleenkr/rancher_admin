var express = require('express');
var app = express();
const dataDetails = require('./dataDetails')
var router = express.Router()
app.use('/',router);
router.get('/rancher',dataDetails.ranchers);
router.get('/testdata', function(req,res){
res.send("check initial Test Data details");
});
//other invalid routes here
router.get('*',function(req,res){
res.send("Sorry, this is an invalid Url");
});
app.listen(3020,function(req,res){
console.log("Server is running at port:3020")
});
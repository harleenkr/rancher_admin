// call express
var express = require('express');
// define our app using express
var app = express();
// import the dataDetails.js
const dataDetails = require('./dataDetails')
// import the saveDataInRedis.js
const saveDataInRedis = require('./saveDataInRedis')
// get an instance of the express Route
var router = express.Router()
// all of our routes will be prefixed with /
app.use('/', router);

//This endPoint is used to display the rancher data on client side
router.get('/rancher', dataDetails.ranchers);

//This endPoint is used to save the data in Redis
router.get('/datasavedInRedis', function (req, res) {
  saveDataInRedis.setClient;
  saveDataInRedis.getClient;
  res.send("save Data details");
});

//other invalid routes here
router.get('*', function (req, res) {
  res.send("Sorry, this is an invalid Url");
});
// listens the application
app.listen(3020, function (req, res) {
  console.log("Server is running at port:3020")
});
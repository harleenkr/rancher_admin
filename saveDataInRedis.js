//require REDIS
var redis = require('redis');
//creates a new client
var client = redis.createClient();

//creates a sets the key-value inside REDIS
const setClient = client.set('saved', 'MEAN STACK', function (err, reply) {
  console.log(reply);
});

//creates a gets the value from REDIS based on key
const getClient = client.get('saved', function (err, reply) {
  console.log(reply);
});

// listen for connect events
client.on('connect', function () {
  console.log('Connected to Redis');
});

// exports setClient and getClient methods
exports.setClient = setClient;
exports.getClient = getClient;
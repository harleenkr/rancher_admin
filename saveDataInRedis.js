//require REDIS
var redis = require('redis');
subscriber = redis.createClient()
publisher = redis.createClient();

const SparkPost = require('sparkpost');
const client = new SparkPost('f110f356cab997d3f2f9a498e83d8dc3cbc34ab1');

async function sendEmail() {
  try {
    var responseSend = await client.transmissions.send({
      content: {
        from: 'optimus@rudimk.net',
        subject: 'Congrats Data is changed in REDIS',
        html: '<html><body><p>Sending mail when data is added in REDIS!</p></body></html>'
      },
      recipients: [
        { address: 'harleen.kaur+11@indiqus.com' }
      ]
    })
    return responseSend;
  }
  catch (e) {
    console.log(e)
  }
}

subscriber.on("message", function (channel, message) {
  console.log("Message '" + message + "' on channel '" + channel + "' arrived!");
  sendEmail().then(function (emailData) {
    console.log('emailData', emailData);
  })
});

exports.subs = subscriber.subscribe("email");
exports.publisher = publisher.publish("email", "send email for the first time");
//publisher.publish("email", "send email for the second time");

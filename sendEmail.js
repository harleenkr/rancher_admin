const SparkPost = require('sparkpost');
const client = new SparkPost('emailForRedis');

const clientMail = function() {
  client.transmissions.send({
    options: {
      sandbox: true
    },
    content: {
      from: '',
      subject: 'Hello, World!',
      html:'<html><body><p>Testing SparkPost - the world\'s most awesomest email service!</p></body></html>'
    },
    recipients: [
      {address: 'harleen.kaur@indiqus.com'}
    ]
  })
  .then(data => {
    console.log('Woohoo! You just sent your first mailing!');
    console.log(data);
  })
  .catch(err => {
    console.log('Whoops! Something went wrong');
    console.log(err);
  });
};
exports.clientMail = clientMail;
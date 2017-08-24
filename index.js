const reThinkPlus = require('rethink-plus')
const moment = require('moment')
var superagent = require('superagent')
const dbData = new reThinkPlus({
  })
async function getRancher(){
try{
  var responseDetails = await superagent.get('https://rancher.rudimk.net/v2-beta/projects/1a5/containers/').auth('E4E078C4379953D3B913','663rrpxj98SjBm4VfkzGenxTZLyknYiLTzXn3rzD');
  var responseRancher = responseDetails.body.data;
  var rancherDataWithTime = {timestamp: moment().format('YYYY-MM-DD HH:mm:SS'), responseRancher: responseRancher}
  var insertedRancher = await dbData.db('Ops').table('Containers').insert(rancherDataWithTime).run()
  return insertedRancher;
}
 catch(e){
   console.log(e)
 }
}
getRancher().then(function(rancherData){
    //console.log(`The actual Rancher Data's ID is ${rancherData['generated_keys'][0]}.`);
})
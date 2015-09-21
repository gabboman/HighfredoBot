'use strict';

module.exports = function(bot) {
    var conf = require('.././conf.json');
    var name = "amazon";
    var description = "Search in amazon";
    var amazon=require('amazon-product-api')
    var client = amazon.createClient({
  awsTag: conf.bot.TAG,
  awsId: conf.bot.AWS_ID,
  awsSecret: conf.bot.AWS_SECRET
});

    var exec = function(msg, reply) {
       busqueda   = client.itemSearch({ keywords: msg});
      //testing= yield (busqueda);
      pulpFiction   = client.itemSearch({ keywords: 'Pulp fiction'});
      console.log(pulpFiction);
      reply.sendMessage(pulpFiction);

      /*  request({url:'http://api.oboobs.ru/noise/1', json:true}, function (error, response, body) {
            if (!error && response.statusCode == 200 && body.length > 0) {
                reply.sendChatAction('upload_photo');
                var foto = request("http://media.oboobs.ru/" + body[0].preview);
                reply.sendPhoto(foto);
            } else {
                reply.sendMessage("Error...");
            }
        });
    */
  };

    return {
        name: name,
        exec: exec,
        description: description,
        help: '/' + name + " [article] - " + description
    }
};

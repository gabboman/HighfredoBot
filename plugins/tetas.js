'use strict';

var _ = require('lodash'),
    request = require('request');

module.exports = function(bot) {

    var name = "tetas";
    var description = "foto tetas";
    var frases=[
    'Mira que eres pesado con las tetas',
    'no sabes abrir una pagina porno tu solo?',
    'Te has planteado mirar el código y mirar el api tu mismo?',
    'Eres tan fe@ que pides fototetas a un bot']
    var exec = function(msg, reply) {


      bot.sendMessage(msg.chat.id, frases[_.random(frases.length - 1)]);
      //reply.sendMessage("Plugin desactivado hasta nuevo aviso");
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
        description: description
    }
};

'use strict';

var _ = require('lodash');

module.exports = function(bot) {

    var name = "bola8";
    var description = "Hazme una pregunta";
    var frases = [
        'Es cierto',
        'Si, es asi',
        'Sin ninguna duda',
        'Definitivamente si',
        'Puedes confiar en ello',
        'Tal y como lo veo, si',
        'Lo mas probable',
        'Suena bien',
        'Si',
        'Los signos apuntan a que sí',
        'No lo veo claro...',
        'Preguntame luego',
        'Mejor no te lo digo ahora',
        'No puedo predecirlo',
        'Concentrate y pregunta de nuevo',
        'No cuentes con ello',
        'Mi respuesta es no',
        'Mis fuentes dicen que no',
        'No suena bien',
        'Lo dudo',
        'No lo se, pero dale pasta a @gabboman92'
    ];

    var exec = function(msg) {
      var pregunta= msg.command.params[0] || null;
      if(pregunta!=null){
        bot.sendMessage(msg.chat.id, frases[_.random(frases.length - 1)]);}
        else{
          bot.sendMessage(msg.chat.id, 'Pero preguntame algo, que si tu no sabes la pregunta yo no se la respuesta');
        }
    };

    return {
        name: name,
        exec: exec,
        description: description
    }
};

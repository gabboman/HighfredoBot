'use strict';

module.exports = function(bot) {

    var name = "witcher";
    var description = "El bot opina sobre the witcher";

    var exec = function(msg, reply) {
        reply.sendMessage("Pues the witcher 3 es un pedazo de juego");
    };

    return {
        name: name,
        exec: exec,
        description: description,
        help: '/' + name + " [msg] - " + description
    }
};

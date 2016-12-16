'use strict';

var math = require("mathjs");
var safeEval = require('safe-eval')

module.exports = function(bot) {

    var name = "calc";
    var description = "simple calculator";

    var exec = function(msg, reply) {
        reply.sendMessage(safeEval(msg.command.text)+"" || 'Math Error');
    };

    return {
        name: name,
        exec: exec,
        description: description,
        help: '/' + name + " [expression] - " + description
    }
};
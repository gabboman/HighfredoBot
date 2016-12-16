'use strict';

var _ = require('lodash'),
    request = require('request');


module.exports = function(bot) {

    var name = "4chan";
    var description = "4chan random pics";

    var exec = function(msg, reply) {

        var board = msg.command.params[0] || 'w';
        if (board.startsWith('/')){
          board=board.substr(1);
        }if(board.endsWith('/')){
          board=board.substr(0,board.length-1)
        }
        var blocked=['b','hc','s','i','gif','h','r','s','hm','e','u','d','y','t','hr','aco'];
        //if(blocked.indexOf(board)!=-1){
        if(true){
          reply.sendMessage("Bloqueado para ser SFW");
        }else{
        request({url:'https://a.4cdn.org/'+board+'/threads.json', json:true},
            function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    reply.sendChatAction('upload_photo');
                    var randomPage = _.random(body.length - 1);
                    var threads = body[randomPage].threads;
                    var randomThread = _.random(threads.length - 1);
                    var threadId = threads[randomThread].no;

                    request({url:'https://a.4cdn.org/'+board+'/thread/'+ threadId +'.json', json:true}, function(error, response, body) {
                        var posts = _.filter(body.posts, function(p) { return p.filename });
                        var randomPost = _.random(posts.length - 1);
                        var post = posts[randomPost];

                        var document = request('https://i.4cdn.org/'+board+'/'+ post.tim + post.ext);
                        reply.send(document);
                    });
                } else {
                    reply.sendMessage("Error...");
                }
            });
    }};

    return {
        name: name,
        exec: exec,
        description: description,
        help: '/' + name + " [boardId] - " + description
    }
};

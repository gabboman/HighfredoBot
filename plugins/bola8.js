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
        'No lo se, pero dale pasta a @gabboman',
        'si sabes lo que significa la recursión, es posible',
        'Piensa tu la puta respuesta coño que ya eres mayorcit@',
        'Si 4chan estuviera activo te lo diría',
        'No lo se, pero eso me recuerda que quiero una hamburguesa con queso',
        'Si @juanca1991 dejara de mandar porno te podría decir la respuesta',
        'Rezale a tu Dios',
        'Yodeadodoyodeadodoyodeadodoyodeadodo\nyodeadodoyodeadodoyo-bab-baaaaa\nAhhhhhh-aaahhhh-aaaaaa-aaaaAAA!\nOhhhhhh-ooohhh-oooooo-oooOOO!\n\nYodeadodoyodeadodoyodeadodoyodeadodo\nyodeadodoyodeadodoyo-bab-baaaaa\nAhhhhhh-aaahhhh-aaaaaa-aaaaAAA!\nOhhhhhh-ooohhh-oooooo-oooOOO!\n\numdub-adaoh-segel-ungucur-ungetu-hungetur-hupreyu\nundubea-unpedurl-humpelilly-luptodoro-licktetor-ulumpadero\numbader-lickatine-lupator-lackatera\nbatickatheplalera\ntheblumpalumpadera\nho?\nho ho ha haaaa!\n\nYodeadodoyodeadodoyodeadodoyodeadodo\nyodeadodoyodeadodoyo-bab-baaaaa\nAhhhhhh-aaahhhh-aaaaaa-aaaaAAA!\nOhhhhhh-ooohhh-oooooo-oooOOO!\n\nBom bom bom bom\nBom bom bom\nBom bom bom bom bom bom bom\nBom bom bom\nBom bom bom\nBom bom bom bom bom bom \nBac bac bac bac bac backaaaaa!\nYeeeeha!\n\nba um um um um um\nba um um um um um\nba oooohhboooobooboboboooo!\n\nYodeadodoyodeadodoyodeadodoyodeadodo\nyodeadodoyodeadodoyo-bab-baaaaa\nAhhhhhh-aaahhhh-aaaaaa-aaaaAAA!\nOhhhhhh-ooohhh-oooooo-oooOOO!\nYeaah! Whoooo!\n',
        'PUEDES SER EL MAS MODERNO PERO EL DÍA DE TU ENTIERRO NO TE LLORARÁ NI DIOS *lo siento, el bot está escuchando música, y le mola mucho*'
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

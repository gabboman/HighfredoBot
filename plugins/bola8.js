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
        'Yodeadodoyodeadodoyodeadodoyodeadodo       yodeadodoyodeadodoyo-bab-baaaaa       Ahhhhhh-aaahhhh-aaaaaa-aaaaAAA!       Ohhhhhh-ooohhh-oooooo-oooOOO!              Yodeadodoyodeadodoyodeadodoyodeadodo       yodeadodoyodeadodoyo-bab-baaaaa       Ahhhhhh-aaahhhh-aaaaaa-aaaaAAA!       Ohhhhhh-ooohhh-oooooo-oooOOO!              umdub-adaoh-segel-ungucur-ungetu-hungetur-hupreyu       undubea-unpedurl-humpelilly-luptodoro-licktetor-ulumpadero       umbader-lickatine-lupator-lackatera       batickatheplalera       theblumpalumpadera       ho?       ho ho ha haaaa!              Yodeadodoyodeadodoyodeadodoyodeadodo       yodeadodoyodeadodoyo-bab-baaaaa       Ahhhhhh-aaahhhh-aaaaaa-aaaaAAA!       Ohhhhhh-ooohhh-oooooo-oooOOO!              Bom bom bom bom       Bom bom bom       Bom bom bom bom bom bom bom       Bom bom bom       Bom bom bom       Bom bom bom bom bom bom        Bac bac bac bac bac backaaaaa!       Yeeeeha!              ba um um um um um       ba um um um um um       ba oooohhboooobooboboboooo!              Yodeadodoyodeadodoyodeadodoyodeadodo       yodeadodoyodeadodoyo-bab-baaaaa       Ahhhhhh-aaahhhh-aaaaaa-aaaaAAA!       Ohhhhhh-ooohhh-oooooo-oooOOO!       Yeaah! Whoooo!       ',
        'PUEDES SER EL MAS MODERNO PERO EL DÍA DE TU ENTIERRO NO TE LLORARÁ NI DIOS *lo siento, el bot está escuchando música, y le mola mucho*',
        'OJALÁ ME ENTRETUVIERA LA ÉPICA GRIEGA        OJALÁ LA HEREDERA DE LA HISTORIA ENTERA         FUERA LA ÚNICA PIEZA QUE ESCONDE LA CANCIÓN ETERNA       QUE RECOPILA LA NOCHE MÁS PLACENTERA DE NUESTRAS VIDAS       OJALÁ MI MÚSICA FUERA       SETENTERA       Y MIS DRAMAS TERMINARAN EN LA ACERA VOMITANDO LÁGRIMAS NEGRAAAS       PODRIAIIIIS IIIIIIIIIIROS TODOS A LA MIEEEERDAAAAAAA         '
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

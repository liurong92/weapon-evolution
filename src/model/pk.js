var Player = require('./player');

function Pk() {

}

Pk.prototype.pkResult = function (player1, player2) {
  var texts = '';
  var playerText1 = player2.position + player2.name + player2.weapon +
      '攻击了' + player1.position + player1.name + ',';
  var playerText2 = player1.position + player1.name + player1.weapon +
      '攻击了' + player2.position + player2.name + ',';

  while(1) {
    player1.hp -= player2.attack;
    texts += playerText1 + player1.name + '受到' +player2.attack + '点攻击，剩' +
             player1.hp + '点血。\n';
    if(player1.hp <= 0) {
      texts += '\n' + player1.name + '输。';
      break;
    }

    player2.hp -= player1.attack;
    texts += playerText2 + player2.name + '受到' + player1.attack + '点攻击，剩' +
             player2.hp + '点血。\n';

    if(player2.hp <= 0) {
      texts += '\n' + player2.name + '输。';
      break;
    }
  }
  return texts;
};
module.exports = Pk;

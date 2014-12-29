var Player = require('./player');

function Pk() {

}

Pk.prototype.pkResult = function (player1, player2) {
  var texts = '';
  while(1) {
    player1.hp -= player2.attack;
    texts += player1.name + '受到' + player2.name + '的' +
             player2.attack + '点攻击，剩' + player1.hp + '点血。\n';
    if(player1.hp <= 0) {
      texts += '\n' + player1.name + '输。';
      break;
    }

    player2.hp -= player1.attack;
    texts += player2.name + '受到' + player1.name + '的' +
             player1.attack + '点攻击，剩' + player2.hp + '点血。\n';

    if(player2.hp <= 0) {
      texts += '\n' + player2.name + '输。';
      break;
    }
  }
  return texts;
};
module.exports = Pk;

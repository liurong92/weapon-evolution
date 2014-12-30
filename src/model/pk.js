var Player = require('./player');

function Pk() {

}

Pk.prototype.pkResult = function (player1, player2) {
  var texts = '';
  var playerText1 = player2.getRoleName() + player2.name + player2.getWeaponName() +
                    '攻击了' + player1.getRoleName() + player1.name + ',';
  var playerText2 = player1.getRoleName() + player1.name + player1.getWeaponName() +
                    '攻击了' + player2.getRoleName() + player2.name + ',';

  while(1) {
    player1.hp -= (player2.getRoleAttack() + player2.getWeaponAttack());
    texts += playerText1 + player1.name + '受到' + (player1.getRoleAttack() + player1.getWeaponAttack()) +
             '点攻击，剩' + player1.hp + '点血。\n';

    if(player1.hp <= 0) {
      texts += '\n' + player1.name + '输。';
      break;
    }

    player2.hp -= (player1.getRoleAttack() + player1.getWeaponAttack());
    texts += playerText2 + player2.name + '受到' + (player1.getRoleAttack() + player1.getWeaponAttack()) +
             '点攻击，剩' + player2.hp + '点血。\n';

    if(player2.hp <= 0) {
      texts += '\n' + player2.name + '输。';
      break;
    }
  }
  return texts;
};
module.exports = Pk;

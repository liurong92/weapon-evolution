var Player = require('./player');

function Pk(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
}

Pk.prototype.pkResult = function () {
  var texts = '';

  while(1) {

    texts += this.getPlayerText(this.player2, this.player1);
    if(this.player1.hp <= 0) {
      texts += '\n' + this.player1.name + '输。';
      break;
    }

    texts += this.getPlayerText(this.player1, this.player2);
    if(this.player2.hp <= 0) {
      texts += '\n' + this.player2.name + '输。';
      break;
    }
  }
  return texts;
};

Pk.prototype.calculateDamage = function (attacker, defencer) {
  return attacker.getAttcakPoint() - defencer.getDefPoint();
};

Pk.prototype.getNewAttack = function (attacker, defencer) {
   defencer.hp -= this.calculateDamage(attacker, defencer);
};

Pk.prototype.getPlayerText = function (attacker, defencer) {
  this.getNewHp(attacker, defencer);
  return attacker.getRoleName() + attacker.name + '攻击了' +
         defencer.getRoleName() + defencer.name + ',' + defencer.name +
         '受到' + (attacker.getRoleAttack() + attacker.getWeaponAttack()) +
         '点攻击，剩' + defencer.hp + '点血。\n';

};

module.exports = Pk;

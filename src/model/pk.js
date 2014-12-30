var Player = require('./player');

function Pk(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
}

Pk.prototype.pkResult = function () {
  var texts = '';

  while(1) {

    texts += this.getPlayerOneText();
    if(this.player1.hp <= 0) {
      texts += '\n' + this.player1.name + '输。';
      break;
    }

    texts += this.getPlayerTwoText();
    if(this.player2.hp <= 0) {
      texts += '\n' + this.player2.name + '输。';
      break;
    }
  }
  return texts;
};

Pk.prototype.getPlayOneHp = function () {
  return this.player2.getRoleAttack();
};

Pk.prototype.getPlayerOneText = function () {
  this.player1.hp -= this.getPlayOneHp();

  var playerOneText1 = this.player2.getRoleName() + this.player2.name +
                      '攻击了' + this.player1.getRoleName() + this.player1.name + ',' ;
  var playerOneText2 = this.player1.name + '受到' + (this.player1.getRoleAttack() + this.player1.getWeaponAttack()) +
                      '点攻击，剩' + this.player1.hp + '点血。\n';

  return playerOneText1 + playerOneText2;
};

Pk.prototype.getPlayerTwoHp = function () {
  return this.player1.getRoleAttack() + this.player1.getWeaponAttack();
};

Pk.prototype.getPlayerTwoText = function () {
  this.player2.hp -= this.getPlayerTwoHp();

  var playerTwoText1 = this.player1.getRoleName() + this.player1.name + this.player1.getWeaponName() +
                      '攻击了' + this.player2.getRoleName() + this.player2.name + ',' ;

  var playerTwoText2 = this.player2.name + '受到' + (this.player1.getRoleAttack() +this.player1.getWeaponAttack()) +
                      '点攻击，剩' + this.player2.hp + '点血。\n';

  return playerTwoText1 + playerTwoText2;
};

// Pk.prototype.getEffects = function () {
//   var text = '';
//
//
//   if(this.player1.weapon.getEffectsTrigger() === 1) {
//     text = this.player2.name + '发动了' + this.player2.weapon.getEffectsName() + ',';
//   }
//   return text;
// };

module.exports = Pk;

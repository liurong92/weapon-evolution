function Pk() {

}

Pk.prototype.pkResult = function (player1, player2) {
  console.log(player1.name);
  var text = '';
  while(1) {
    player1.hp = player1.hp - player2.attack;

    player2.hp = player2.hp - player1.attack;

    if(player1.hp <= 0) {
      text = player1.name + '死。';
      break;
    }
    if(player2.hp <= 0) {
      text = player2.name + '死。';
      break;
    }
  }
  return text;
};
module.exports = Pk;

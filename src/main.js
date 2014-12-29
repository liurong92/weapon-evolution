var Player = require('./model/player');
var Pk = require('./model/pk');

function weaponEvolution() {
  var player1 = new Player('李四',50,5,'狂战士','用砍刀','');
  var player2 = new Player('王五',50,10,'屌丝','','');

  var pk = new Pk();
  var result = pk.pkResult(player1, player2);

  console.log(result);
}

weaponEvolution();

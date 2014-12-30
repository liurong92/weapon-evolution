var Player = require('./model/player');
var Pk = require('./model/pk');
var Weapon = require('./model/weapon');
var Role = require('./model/role');

function weaponEvolution() {
  var weaponPlayer1 = new Weapon('用砍刀',5);
  var weaponPlayer2 = new Weapon('',0);

  var role1 = new Role('狂战士',5);
  var role2 = new Role('屌丝',10);

  var player1 = new Player('李四',50,role1,weaponPlayer1,'');
  var player2 = new Player('王五',50,role2,weaponPlayer2,'');

  var pk = new Pk();
  var result = pk.pkResult(player1, player2);

  console.log(result);
}

weaponEvolution();

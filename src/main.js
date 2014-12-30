var Player = require('./model/player');
var Pk = require('./model/pk');
var Weapon = require('./model/weapon');
var Role = require('./model/role');
var Defense = require('./model/defense');


function weaponEvolution() {
  var weaponPlayer1 = new Weapon('用砍刀', 5, '');
  var weaponPlayer2 = new Weapon('', 0, '');

  var defensePlayer1 = new Defense('藤甲',5);

  var role1 = new Role('狂战士',5);
  var role2 = new Role('屌丝',10);

  var player1 = new Player('李四',60,role1,weaponPlayer1,defensePlayer1);
  var player2 = new Player('王五',50,role2,weaponPlayer2,'');

  var pk = new Pk(player1, player2);
  var result = pk.pkResult();

  console.log(result);
}

weaponEvolution();

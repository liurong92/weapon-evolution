var Player = require('./model/player');
var Pk = require('./model/pk');
var Weapon = require('./model/weapon');
var Role = require('./model/role');
var Defense = require('./model/defense');
var Soldier = require('./model/soldier');
var Effects = require('./model/effects');

function weaponEvolution() {
  var weaponPlayer = new Weapon('砍刀', 5, new Effects('致命一击', 4));

  var defensePlayer = new Defense('藤甲',5);
  var effects = new Effects('致命一击', 4);

  var role1 = new Role('狂战士', 5);
  var role2 = new Role('屌丝',17);

  var soldier = new Soldier('李四',50,role1,weaponPlayer,defensePlayer);
  var player = new Player('王五',50,role2);

  var pk = new Pk(soldier, player);
  var result = pk.pkResult();

  console.log(result);
}

weaponEvolution();

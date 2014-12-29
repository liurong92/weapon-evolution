function Player(name, hp, attack) {
  this.name = name;
  this.hp = hp;
  this.attack = attack;
}

Player.prototype.getName = function() {
  return this.name;
};

Player.prototype.getHp = function() {
  return this.hp;
};

Player.prototype.getAttack = function() {
  return this.attack;
};

module.exports = Player;

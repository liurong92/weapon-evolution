function Player(name, hp, attack, position, weapon, defense) {
  this.name = name;
  this.hp = hp;
  this.attack = attack;
  this.position = position;
  this.weapon = weapon;
  this.defense = defense;
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

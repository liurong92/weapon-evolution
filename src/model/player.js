function Player(name, hp, role, weapon, defense) {
  this.name = name;
  this.hp = hp;
  this.role = role;
  this.weapon = weapon;
  this.defense = defense;
}

Player.prototype.getRoleName = function () {
  return this.role.roleName;
};

Player.prototype.getRoleAttack = function () {
  return this.role.roleAttack;
};

Player.prototype.getWeaponName = function () {
  return this.weapon.weaponName;
};

Player.prototype.getWeaponAttack = function () {
  return this.weapon.weaponAttack;
};

Player.prototype.getdefenseName = function () {
  return this.defense.defenseName;
};

Player.prototype.getDefenseAttack = function () {
  return this.defense.defenseAttack;
};

module.exports = Player;

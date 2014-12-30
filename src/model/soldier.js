function Soldier (name, hp, role, weapon, defense) {
  this.name = name;
  this.hp = hp;
  this.role = role;
  this.weapon = weapon;
  this.defense = defense;
}

Soldier.prototype.getRoleName = function () {
  return this.role.roleName;
};

Soldier.prototype.getRoleAttack = function () {
  return this.role.roleAttack;
};

Soldier.prototype.getWeaponName = function () {
  return this.weapon.weaponName;
};

Soldier.prototype.getWeaponAttack = function () {
  return this.weapon.weaponAttack;
};

Soldier.prototype.getdefenseName = function () {
  return this.defense.defenseName;
};

Soldier.prototype.getDefenseAttack = function () {
  return this.defense.defenseAttack;
};

module.exports = Soldier;

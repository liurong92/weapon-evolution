var Player = require('../model/player');
function Soldier (name, hp, role, weapon, defense) {
  Player.call (this, name, hp, role, weapon, defense);
}

Soldier.prototype = Object.create(Player.prototype);
Soldier.prototype.constructor = Soldier;

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

Soldier.prototype.getDefenseName = function () {
  return this.defense.defenseName;
};

Soldier.prototype.getDefenseAttack = function () {
  return this.defense.defenseAttack;
};

Soldier.prototype.getAttack = function () {
  return this.weapon.weaponAttack + this.role.roleAttack;
};

Soldier.prototype.getDefense = function () {
  return this.defense.defenseAttack;
};

Soldier.prototype.getTrigger = function () {
  return this.weapon.getEffectsTrigger();
};

Soldier.prototype.getWeapon = function () {
  return '用' + this.weapon.weaponName;
};

Soldier.prototype.getEffect = function () {
  // if(this.weapon.getEffectsTrigger() === 1) {
  //   return this.name + '发动了' + this.weapon.getEffectsName() + ',';
  // }

  if(this.getTrigger() === 1) {
    return this.name + '发动了' + this.weapon.getEffectsName() + ',';
  }
  return '';
};

module.exports = Soldier;

function Weapon(weaponName, weaponAttack, effects) {
  this.weaponName = weaponName;
  this.weaponAttack = weaponAttack;
  this.effects = effects || [];
}

Weapon.prototype.getWeaponName = function () {
  return this.weaponName;
};

Weapon.prototype.getWeaponAttack = function () {
  return this.weaponAttack;
};

Weapon.prototype.getEffectsName = function () {
  return this.effects.effectName;
};

Weapon.prototype.getEffectsTrigger = function () {
  return this.effects.trigger;
};

module.exports = Weapon;

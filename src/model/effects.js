function Effects(effectName, trigger, times) {
  this.effectName = effectName;
  this.trigger = trigger || 0;
  this.times = times;
}

// Effects.all = function () {
//   new Effects ('中毒', 0.4, 2);
//   new Effects ('着火', 0.3, 2);
//   new Effects ('冻僵', 0.2, 2);
//   new Effects ('晕倒', 0.1, 1);
//   new Effects ('致命一击', 0.6, 1);
// };

Effects.prototype.getEffectName = function () {
  return this.effectName;
};

Effects.prototype.getTrigger = function () {
  return this.trigger;
};

Effects.prototype.getTimes = function () {
  return this.times;
};

module.exports = Effects;

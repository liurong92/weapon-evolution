function Effects(effectName, trigger, times) {
  this.effectName = effectName;
  this.trigger = trigger || 0;
  this.times = times;
}

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

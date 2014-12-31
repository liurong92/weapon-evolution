function Effects(effectName, trigger) {
  this.effectName = effectName;
  this.trigger = trigger || 0;
}

// function effects() {
//   return {effectName : 致命一击, trigger : 1};
// }

Effects.prototype.getEffectName = function () {
  return this.effectName;
};

Effects.prototype.getTrigger = function () {
  return this.trigger;
};

module.exports = Effects;

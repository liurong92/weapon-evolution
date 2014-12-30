jest.dontMock('../src/model/weapon');

describe('Weapon', function() {
  describe('#Weapon', function() {
    it('should return Weapon messige', function() {
      var Weapon = require('../src/model/weapon');
      var weapon = new Weapon('用砍刀',5);

      var resultName = weapon.weaponName;
      var resultAttack = weapon.weaponAttack;

      expect(resultName).toEqual('用砍刀');
      expect(resultAttack).toEqual(5);
    });
  });
});

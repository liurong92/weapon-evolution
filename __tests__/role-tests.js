jest.dontMock('../src/model/role');

describe('Role', function() {
  describe('#Role', function() {
    it('should return roleName', function() {
      var Role = require('../src/model/role');
      var role = new Role('狂战士',5);

      var resultName = role.roleName;
      var resultAttack = role.roleAttack;
      expect(resultName).toEqual('狂战士');
      expect(resultAttack).toEqual(5);
    });
  });
});

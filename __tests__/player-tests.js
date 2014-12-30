jest.dontMock('../src/model/player');
jest.dontMock('../src/model/role');
jest.dontMock('../src/model/weapon');
jest.dontMock('../src/model/defense');


describe('Player', function() {
  describe('#getRoleName', function() {
    var Role = require('../src/model/role');
    var role = new Role('狂战士', 5);

    var Weapon = require('../src/model/weapon');
    var weapon = new Weapon('用砍刀', 5);

    var Defense = require('../src/model/defense');
    var defense = new Defense('藤甲', 5);

    var Player = require('../src/model/player');
    var player = new Player('李四', 50, role, weapon, defense);

    it('should return roleName', function() {
      var result = player.getRoleName();
      expect(result).toEqual('狂战士');
    });
  });
});

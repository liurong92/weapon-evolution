jest.dontMock('../src/model/player');
jest.dontMock('../src/model/role');
jest.dontMock('../src/model/weapon');
jest.dontMock('../src/model/defense');


describe('Player', function() {
  var Role,role,Weapon,weapon,Defense,defense,Player,player;
  beforeEach(function () {
    Role = require('../src/model/role');
    role = new Role('狂战士', 5);

    Weapon = require('../src/model/weapon');
    weapon = new Weapon('用砍刀', 5);

    Defense = require('../src/model/defense');
    defense = new Defense('藤甲', 5);

    Player = require('../src/model/player');
    player = new Player('李四', 50, role, weapon, defense);
  });
  
  describe('#getRoleName', function() {
    it('should return roleName', function() {
      var result = player.getRoleName();
      expect(result).toEqual('狂战士');
    });
  });
});

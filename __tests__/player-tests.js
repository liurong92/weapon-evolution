jest.dontMock('../src/model/player');

describe('Pk', function() {
  describe('#pkResult', function() {
    var Player,player;
    beforeEach(function() {
      Player = require('../src/model/player');
      player = new Player('李四',50,5);
    });

    it('should return player_name',  function () {
      var result = player.getName();

      expect(result).toEqual('李四');
    });

    it('should return player_hp',  function () {
      var result = player.getHp();

      expect(result).toEqual(50);
    });

    it('should return player_attack',  function () {
      var result = player.getAttack();

      expect(result).toEqual(5);
    });
  });
});

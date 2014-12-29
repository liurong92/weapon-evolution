jest.dontMock('../src/model/player');

describe('Pk', function() {
  describe('#pkResult', function() {
    it('should return player_name',  function () {
      var Player = require('../src/model/player');
      var player = new Player('李四',50,5);

      var result = player.getName();

      expect(result).toEqual('李四');
    });

    it('should return player_hp',  function () {
      var Player = require('../src/model/player');
      var player = new Player('李四',50,5);

      var result = player.getHp();

      expect(result).toEqual(50);
    });

    it('should return player_attack',  function () {
      var Player = require('../src/model/player');
      var player = new Player('李四',50,5);

      var result = player.getAttack();

      expect(result).toEqual(5);
    });
  });
});

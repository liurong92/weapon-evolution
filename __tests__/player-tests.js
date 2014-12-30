jest.dontMock('../src/model/player');

describe('Player', function() {
  describe('#player', function() {
    var Player,player;
    beforeEach(function() {
      Player = require('../src/model/player');
      player = new Player('李四',50,5);
    });
  });
});

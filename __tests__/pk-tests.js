jest.dontMock('../src/model/pk');

describe('Pk', function() {
  describe('#pkResult', function() {
    it('should return who dead',  function () {
      var Pk = require('../src/model/pk');
      var pk = new Pk();

      var player1 = {name :'李四',hp: 50,attack: 5};
      var player2 = {name :'王五',hp: 50,attack: 10};

      var result = pk.pkResult(player1, player2);

      expect(result).toEqual('李四死。');
    });
  });
});

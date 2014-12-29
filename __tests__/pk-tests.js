jest.dontMock('../src/model/pk');

describe('Pk', function() {
  describe('#pkResult', function() {
    it('should return who dead',  function () {
      var Pk = require('../src/model/pk');
      var pk = new Pk();

      var player1 = {name :'小明',hp: 50,attack: 5};
      var player2 = {name :'小萌',hp: 50,attack: 10};

      var texts = '小明受到小萌的10点攻击，剩40点血。\n' +
                  '小萌受到小明的5点攻击，剩45点血。\n' +
                  '小明受到小萌的10点攻击，剩30点血。\n' +
                  '小萌受到小明的5点攻击，剩40点血。\n' +
                  '小明受到小萌的10点攻击，剩20点血。\n' +
                  '小萌受到小明的5点攻击，剩35点血。\n' +
                  '小明受到小萌的10点攻击，剩10点血。\n' +
                  '小萌受到小明的5点攻击，剩30点血。\n' +
                  '小明受到小萌的10点攻击，剩0点血。\n' +
                  '小萌受到小明的5点攻击，剩25点血。\n' +
                  '小明输。';
      var result = pk.pkResult(player1, player2);

      expect(result).toEqual(texts);
    });
  });
});

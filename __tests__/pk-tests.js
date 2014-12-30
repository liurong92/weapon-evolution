jest.dontMock('../src/model/pk');

describe('Pk', function() {
  describe('#pkResult', function() {
    it('should return who dead',  function () {
      var Pk = require('../src/model/pk');
      var pk = new Pk();

      var player1 = {name :'李四',
                     hp: 50,
                     role : {
                       roleName : '狂战士',
                       roleAttack : 5
                     },
                     weapon : {
                       weaponName : '用砍刀',
                       weaponAttack : 5},
                     defence : ''};
      var player2 = {name :'王五',
                     hp: 50,
                     role : {
                       roleName : '屌丝',
                       roleAttack : 10
                     },
                     weapon : {
                       weaponName : '',
                       weaponAttack : 0},
                     defence : ''};

      var texts = '屌丝王五攻击了狂战士李四,李四受到10点攻击，剩40点血。\n' +
                  '狂战士李四用砍刀攻击了屌丝王五,王五受到10点攻击，剩40点血。\n' +
                  '屌丝王五攻击了狂战士李四,李四受到10点攻击，剩30点血。\n' +
                  '狂战士李四用砍刀攻击了屌丝王五,王五受到10点攻击，剩30点血。\n' +
                  '屌丝王五攻击了狂战士李四,李四受到10点攻击，剩20点血。\n' +
                  '狂战士李四用砍刀攻击了屌丝王五,王五受到10点攻击，剩20点血。\n' +
                  '屌丝王五攻击了狂战士李四,李四受到10点攻击，剩10点血。\n' +
                  '狂战士李四用砍刀攻击了屌丝王五,王五受到10点攻击，剩10点血。\n' +
                  '屌丝王五攻击了狂战士李四,李四受到10点攻击，剩0点血。\n' +
                  '\n李四输。';
      var result = pk.pkResult(player1, player2);

      expect(result).toEqual(texts);
    });
  });
});

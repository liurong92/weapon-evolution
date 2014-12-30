jest.autoMockOff();

describe('Pk', function() {
  describe('#pkResult', function() {
    it('should return who dead',  function () {
      var Role = require('../src/model/role');
      var role1 = new Role('狂战士', 5);
      var role2 = new Role('屌丝', 10);

      var Effects = require('../src/model/effects');
      var effects = new Effects('致命一击', 1);

      var Weapon = require('../src/model/weapon');
      var weapon1 = new Weapon('用砍刀', 5);
      var weapon2 = new Weapon('sigh', 0);

      var Defense = require('../src/model/defense');
      var defense1 = new Defense('藤甲', 5);

      var Player = require('../src/model/player');
      var Soldier = require('../src/model/soldier');
      var player1 = new Soldier('李四', 50, role1, weapon1, defense1);
      var player2 = new Player('王五', 50, role2);

      var Pk = require('../src/model/pk');
      var pk = new Pk(player1, player2);

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
      var result = pk.pkResult();

      expect(result).toEqual(texts);
    });

  });
});

jest.autoMockOff();

describe('Pk', function() {
  describe('#pkResult', function() {
    var Role,role1,role2,Defense,defense;
    beforeEach(function () {
      Role = require('../src/model/role');
      role1 = new Role('狂战士', 5);
      role2 = new Role('屌丝', 10);
      Defense = require('../src/model/defense');
      defense = new Defense('藤甲', 5);
    });

    it('should return who dead',  function () {

      var Weapon = require('../src/model/weapon');
      var weapon = new Weapon('砍刀', 5);

      var Player = require('../src/model/player');
      var Soldier = require('../src/model/soldier');
      var soldier = new Soldier('李四', 50, role1, weapon, defense);
      var player = new Player('王五', 50, role2);

      var Pk = require('../src/model/pk');
      var pk = new Pk(soldier, player);

      var texts = '屌丝王五攻击了狂战士李四,李四受到5点攻击，剩45点血。\n' +
                  '狂战士李四用砍刀攻击了屌丝王五,王五受到10点攻击，剩40点血。\n' +
                  '屌丝王五攻击了狂战士李四,李四受到5点攻击，剩40点血。\n' +
                  '狂战士李四用砍刀攻击了屌丝王五,王五受到10点攻击，剩30点血。\n' +
                  '屌丝王五攻击了狂战士李四,李四受到5点攻击，剩35点血。\n' +
                  '狂战士李四用砍刀攻击了屌丝王五,王五受到10点攻击，剩20点血。\n' +
                  '屌丝王五攻击了狂战士李四,李四受到5点攻击，剩30点血。\n' +
                  '狂战士李四用砍刀攻击了屌丝王五,王五受到10点攻击，剩10点血。\n' +
                  '屌丝王五攻击了狂战士李四,李四受到5点攻击，剩25点血。\n' +
                  '狂战士李四用砍刀攻击了屌丝王五,王五受到10点攻击，剩0点血。\n' +
                  '\n王五输。';
      var result = pk.pkResult();

      expect(result).toEqual(texts);
    });

    it('should return 狂战士李四用砍刀攻击了屌丝王五,李四发动了致命一击,王五受到10点攻击，剩40点血。', function() {
      var Effects = require('../src/model/effects');
      var effects = new Effects('致命一击', 1);

      var Weapon = require('../src/model/weapon');
      var weapon = new Weapon('砍刀', 5, effects);

      var Player = require('../src/model/player');
      var Soldier = require('../src/model/soldier');
      var soldier = new Soldier('李四', 50, role1, weapon, defense);
      var player = new Player('王五', 50, role2);

      var Pk = require('../src/model/pk');
      var pk = new Pk(soldier, player);

      var texts = '狂战士李四用砍刀攻击了屌丝王五,李四发动了致命一击,王五受到10点攻击，剩40点血。\n';

      var result = pk.getPlayerText(soldier, player);

      expect(result).toEqual(texts);
    });

  });
});

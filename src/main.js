function weaponEvolution() {
  var player1 = new Player('李四',50,5);
  var player2 = new Player('王五',50,10);

  var pk = new Pk();
  var result = pk.pkResult(player1, player2);

  console.log(result);
}

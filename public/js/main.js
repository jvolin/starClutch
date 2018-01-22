var game;
var score;
var text;
var sound = true;
// var highScore = 0;
// localStorage.setItem("starClutchHighScore", highScore);
// var highScoreToDisplay = 0;
// if (localStorage.getItem("starClutchHighScore") !== null) {
//     highScoreToDisplay = parseInt(localStorage.getItem("starClutchHighScore"));
// }

window.onload = function()
{
  if (screen.width > 1500) {
    game = new Phaser.Game(460, 640, Phaser.AUTO, "ph_game", null, false, false);
  } else {
    game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, "ph_game");
  }
  game.state.add("StateMain", StateMain);
  game.state.add("StateTitle", StateTitle);
  game.state.add("StateGameOver", StateGameOver);
  game.state.start("StateTitle");
}

var StateGameOver  = {

  preload: function() {
    game.load.image("galaxy2", "assets/images/galaxy2.jpg");
    game.load.image('logo', 'assets/images/starClutchLogo.png');
    game.load.spritesheet('buttons', 'assets/images/buttons.png', 270, 72, 8)
   },

   create: function() {
    this.background = this.game.add.sprite(0,0, "galaxy2");
    this.logo = game.add.sprite(game.world.centerX, 180,'logo')
    this.logo.anchor.set(0.5, 0.5)

    text = game.add.text(game.world.centerX, 300, '', { fill: '#ffffff' });
    if (counter === 1) {
      text.text += "You got " + counter + " star!"
    } else {
      text.text += "You got " + counter + " stars!";
    }
    text.anchor.set(0.5, 0.5)

    this.btnReplay = game.add.button(game.world.centerX, game.world.height - 150, "buttons", this.replay, this, 1, 0, 1)
    this.btnReplay.anchor.set(0.5, 0.5)
   },

   replay: function() {
     game.state.start('StateMain')
   },
   update:function() {

   }
}

var StateTitle = {

  preload: function() {
    game.load.image("galaxy2", "assets/images/galaxy2.jpg");
    game.load.image('logo', 'assets/images/starClutchLogo.png');
    game.load.spritesheet('buttons', 'assets/images/buttons.png', 270, 72, 8)
    if (screen.width < 1500) {
      game.scale.forceOrientation(false, true);
    }


  },

  create: function() {
    this.background = this.game.add.sprite(0,0, "galaxy2");
    //logo
    this.logo = game.add.sprite(game.world.centerX, 180,'logo')
    this.logo.anchor.set(0.5, 0.5)

    //start button
    this.btnStart = game.add.button(game.world.centerX,game.world.height-150, "buttons", this.startGame, this, 7, 6, 8)
    this.btnStart.anchor.set(0.5, 0.5)

    this.setListeners();
  },

  startGame: function() {
    game.state.start("StateMain")
  },

  setListeners: function() {
    if (screen.width < 1500) {
      game.scale.enterIncorrectOrientation.add(this.wrongWay, this);
      game.scale.leaveIncorrectOrientation.add(this.rightWay, this);
    }
  },

  wrongWay: function() {
    document.getElementById("wrongWay").style.display = "block";
  },

  rightWay: function() {
    document.getElementById("wrongWay").style.display = "none";
  },

  update: function() {
    //constant running loop  - check collitions
  }
}

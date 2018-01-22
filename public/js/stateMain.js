var StateMain = {

  preload: function() {
    game.load.image("galaxy", "assets/images/galaxy.jpg");
    game.load.spritesheet('stars', "assets/images/stars.png", 63, 63, 8);
    game.load.spritesheet('soundButtons',  "assets/images/soundButtons.png", 32, 32, 2)
    game.load.audio('light-years', 'assets/sounds/Light-Years.mp3');
    game.load.audio('destination', 'assets/sounds/destination.mp3')
    game.load.audio('game-over', 'assets/sounds/game-over.mp3')
    game.load.audio('clutch1', 'assets/sounds/clutch05.mp3')

  },

  create: function() {

    counter = 0
    this.speed = 200;
    this.background = this.game.add.sprite(0,0, "galaxy");
    game.physics.startSystem(Phaser.Physics.Arcade);

    this.bgMusic = game.add.audio('destination')
    this.gameOverSound = game.add.audio('game-over')
    this.clutchSound = game.add.audio('clutch1')

    this.soundButton = game.add.image(400, 50,"soundButtons")
    this.soundButton.anchor.set(0.5, 0.5);
    this.soundButton.inputEnabled = true;
    this.soundButton.events.onInputDown.add(this.toggleSound, this);
    if(sound) {
      this.soundButton.frame = 0
    } else {
      this.soundButton.frame = 1
    }
    //add random star
    this.star = game.add.sprite(0, 0, 'stars');
    this.star.anchor.set(0.5, 0.5);
    this.star.inputEnabled = true;
    this.star.events.onInputDown.add(this.handleClutch, this);
    this.star.checkWorldBounds = true;
    this.star.events.onOutOfBounds.add(this.starOut, this);
    game.physics.arcade.enable(this.star)

    //scoreboard
    text = game.add.text(game.world.centerX, 50, 'Catch the falling stars!', { fill: '#ffffff' });
    text.anchor.set(0.5, 0.5)

    if (sound){this.bgMusic.play()}
    this.resetStar();
  },

  starOut: function(star) {
    if (sound){this.gameOverSound.play()}
    this.bgMusic.stop()
    game.state.start( "StateGameOver" )
  },

  toggleSound: function(){
    sound = !sound;
    if(sound) {
      this.soundButton.frame = 0
      game.sound.mute = false
    } else {
      this.soundButton.frame = 1;
      game.sound.mute = true
    }
  },

  handleClutch: function() {
    if(sound){this.clutchSound.play()}
    counter++;
    if (counter === 1) {
      text.text = "You got " + counter + " star!"
    } else {
      text.text = "You got " + counter + " stars!";
    }
    this.resetStar();
  },

  resetStar: function(){
    var type = game.rnd.integerInRange(0, 8);
    var xx = game.rnd.integerInRange(35, game.world.width-35);
    var yy = game.rnd.integerInRange(50, 300);

    this.star.body.velocity.setTo(0, 100 + (counter * 5));

    this.star.frame = type;
    this.star.x = xx;
    this.star.y = yy;
  },

  update: function() {
  }
}

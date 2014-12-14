var loadState = {

	preload: function () {		
		// Add a loading label 
		var loadingLabel = game.add.text(game.world.centerX, 150, 'loading...', { font: '30px Arial', fill: '#ffffff' });
		loadingLabel.anchor.setTo(0.5, 0.5);

		// Add a progress bar
		var progressBar = game.add.sprite(game.world.centerX, 200, 'progressBar');
		progressBar.anchor.setTo(0.5, 0.5);
		game.load.setPreloadSprite(progressBar);

		// Load all assets
		game.load.spritesheet('mute', 'assets/muteButton.png', 28, 22);
		// ...
		game.load.image('loadscreen', 'assets/loadscreen.png', 2048, 2048);
		game.load.image('background', 'assets/background.png', 2048, 2048);
		//game.load.image('masterInstructions', 'assets/masterInstructions.png', 2048, 2048);

		//game.load.image('continue', 'assets/continue.png', 0, 0);
		game.load.image('play', 'assets/play.png', 1385, 123);
		game.load.image('instructions', 'assets/instructions.png', 1361, 129);
		game.load.image('hitBox', 'assets/hitBox.png', 146, 142);
		game.load.image('hitBoxRED', 'assets/hitBoxRED.png', 146, 142);

		game.load.image('fullTrain', 'assets/fullTrain.png', 277, 55);

	},

	create: function() { 
		game.state.start('play');
	}
};
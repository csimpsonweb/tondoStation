var menuState = {

	create: function() { 
		
		this.background = game.add.sprite(0, 0, 'loadscreen');
		this.background.anchor.x = 0;
		this.background.anchor.y = 0;

		var playLabel = game.add.sprite(game.world.centerX, 790, 'play');
		playLabel.anchor.setTo(0.5, 0.5);
		playLabel.inputEnabled = true;
		playLabel.events.onInputDown.add(this.start, this);

		var helpLabel = this.game.add.sprite(this.game.world.centerX, 910, 'instructions');
		helpLabel.anchor.setTo(0.5, 0.5); 
		helpLabel.inputEnabled = true;
		helpLabel.events.onInputDown.add(this.instructions, this);
/*
		var contLabel = this.game.add.sprite(this.game.world.centerX, 1900, 'continue');
		contLabel.anchor.setTo(0.5, 0.5); 
		contLabel.inputEnabled = true;
		//contLabel.events.onInputDown.add(this.instructions, this);	
*/
	},
	instructions: function() {
		this.game.state.start('instructions');	
	},
	start: function() {
		game.state.start('play');	
	}
};
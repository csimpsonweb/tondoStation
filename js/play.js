var playState = {

	create: function() { 
        this.background = game.add.sprite(0, 0, 'background');
        this.background.anchor.x = 0;
        this.background.anchor.y = 0;

        this.hitboxes();
        this.fullTrain();
	},
	update: function() {
		this.moveTrains();

	},
	fullTrain: function(){
		this.fullTrain = game.add.sprite(2000, 750, 'fullTrain');

	},
	moveTrains: function(){

		if(this.fullTrain.x > 1999){

			game.global.fullTrainXSpeed = 2;
			game.global.fullTrainStatus = 'moving';
			//console.log(game.global.fullTrainStatus);
		}

	},
    hitboxes: function() {
	    // exit hitbox
	    this.hitboxOne = game.add.sprite(160, 535, 'hitBoxRED');
	    this.hitboxOne.inputEnabled = true;
	    this.hitboxOne.events.onInputDown.add(this.hitboxOneListener, this);

	    this.hitboxTwo = game.add.sprite(600, 960, 'hitBoxRED');
	    this.hitboxTwo.inputEnabled = true;
	    this.hitboxTwo.events.onInputDown.add(this.hitboxTwoListener, this);

	    this.hitboxThree = game.add.sprite(1800, 1800, 'hitBoxRED');
	    this.hitboxThree.inputEnabled = true;
	    this.hitboxThree.events.onInputDown.add(this.hitboxThreeListener, this);
	},
    hitboxOneListener: function() {
    	console.log("train to go home");

    },
    hitboxTwoListener: function() {
    	console.log("train crossing - run the gauntlet");

    },
    hitboxThreeListener: function() {
    	console.log("bottom switch - undefined");

    },
};
console.log("menu");
menuGame={
create:function() {
	game.physics.startSystem(Phaser.Physics.ARCADE);
	bg=game.add.image(0,0,"anim");
	menutext=game.add.text(w/2,h/2,"Menu State");
	keyboard=game.input.keyboard;
	
	// buttonplay=game.add.button(90,10,'play',playna);
	// buttonplay.inputEnabled = true;	
},
update:function(){
	if (keyboard.isDown(Phaser.Keyboard.SPACEBAR)){
		game.state.start("playGame");
	}		
}
}
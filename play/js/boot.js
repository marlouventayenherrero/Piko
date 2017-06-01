console.log("boot");
bootGame = {
	init:function(){
	},
create:function(){
	game.physics.startSystem(Phaser.Physics.ARCADE);
	game.state.start("loadGame");	
}
}
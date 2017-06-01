
var w = 600, h = 800;
var game = new Phaser.Game(w, h, Phaser.CANVAS, '');
var player, keyboard;
var btup,btdown,btleft,btright,btrestart,btpause,btplay, platform, star, stars, life, score=0, scoreInterval, hi, buttonLundag, buttonIkap, textTime, time = 60;
var x = 0;
var speed = 500;
var music,kill;
var tween;
var score = 0,scoreText,gameText,bestText,saveBest,getBest;
var basicGame = function(){
}
basicGame.prototype ={
preload:function(){
    game.load.audio('sound',"audio/ppap.mp3")
    game.load.image('bg','img/base1.png');
    game.load.image('star','img/star.png');
    game.load.spritesheet('naruto','img/charniel.png',64,64);
    game.load.spritesheet('enemy','img/charkc.png',64,50);
    game.load.spritesheet('enemy1','img/charclarie.png',63,55);
    game.load.spritesheet('enemy2','img/charespe.png',63,60);
    game.load.image('btup','img/up.png');
    game.load.image('btdown','img/down.png');
    game.load.image('btleft','img/left.png');
    game.load.image('btright','img/right.png');
    game.load.image('finish','img/a.png');
    game.load.image('restart','img/restart.png');
    game.load.image('pause','img/pause.png');
    game.load.image('play','img/play.png');
},  
create:function(){
    game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
    game.input.onDown.add(gameProcess.gofull, game);
    music = game.add.audio('sound',1,true);
    music.loop=true;
    gameProcess.audioloop(51000);
    console.log("x");
    music.play();
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.add.sprite(0,0,"bg"); 
    //star= game.add.sprite(300,400,"star");
    player4 = game.add.sprite(280,650,"enemy2");
    player3 = game.add.sprite(490,450,"enemy1");
    player2 = game.add.sprite(50,250,"enemy");
    player = game.add.sprite(450,700,"naruto");
    player2.animations.add('walk');
    player2.animations.play('walk',7,true);
    player3.animations.add('walk');
    player3.animations.play('walk',7,true);
    player4.animations.add('walk');
    player4.animations.play('walk',7,true);
    platform=game.add.sprite(0,780,'finish')
    btup=game.add.button(450,600,"btup",gameProcess.taas);
    btup.inputEnabled = true;
    btdown=game.add.button(450,700,"btdown",gameProcess.baba);
    btdown.inputEnabled = true;
    btleft=game.add.button(400,650,"btleft",gameProcess.kaliwa);
    btleft.inputEnabled = true;
    btright=game.add.button(500,650,"btright",gameProcess.kanan);
    btright.inputEnabled = true;
    btrestart=game.add.button(500,0,"restart",gameProcess.ulit);
    btrestart.inputEnabled = true;
    // btpause=game.add.button(450,0,"pause",gameProcess.tuloy);
    // btpause.inputEnabled = true;
    btplay=game.add.button(400,0,"play",gameProcess.tuloy);
    btplay.inputEnabled = true;
    game.restartMenu=game.add.group();
    game.restartMenu.visible=false;
    game.pauseMenu=game.add.group();
    game.pauseMenu.visible=false;   
    player.animations.add("right",[27,28,29,30,31,32,33,34,35],15,true);
    player.animations.add("left",[9,10,11,12,13,14,15,16,17],15,true);
    player.animations.add("up",[0,1,2,3,4,5,6,7,8],15,true);
    player.animations.add("down",[18,19,20,21,22,23,24,25,26],15,true);
    keyboard = game.input.keyboard.createCursorKeys();
    game.physics.arcade.enable(player);
   // game.physics.arcade.enable(star);
     game.physics.arcade.enable(platform);
    //game.physics.arcade.enable(player2);
    player.body.collideWorldBounds = true;
    //player2.body.collideWorldBounds = true;
    player.scale.y = 1;
    player2.scale.y = 1;
    player3.scale.y = 1;
    player4.scale.y = 1;
   // game.physics.arcade.moveToXY(player2,50,250,100);
    tween=game.add.tween(player2).to({x:500},2000,Phaser.Easing.Default,true,200,1000,true);
    tween=game.add.tween(player3).to({x:50},2000,Phaser.Easing.Default,true,200,1000,true);
    tween=game.add.tween(player4).to({y:50},2000,Phaser.Easing.Default,true,200,1000,true);
scoreText=game.add.text(0,20,"SCORE: 0",{fill: "white"} );
gameText=game.add.text(270,400,"",{fill:"RED"});
bestText=game.add.text(0,42,"BEST :"+gameProcess.getBest(),{fill: "white"} );
game.btnpause=game.add.button(450,0,"pause",pauseGame,game,0,0,0);
function pauseGame(){
game.paused=true;
}
game.input.onDown.add(unpause,game);
function unpause(){
if(game.paused){
if(btplay.getBounds().contains(game.input.x,game.input.y)){
game.paused=false;
game.pauseMenu.visible-true;
}
}
}
},
update:function(){
    game.physics.arcade.overlap(player,platform,gameProcess.kill);
    game.physics.arcade.overlap(player,star,gameProcess.killstar);
   if(keyboard.right.isDown){
                    player.animations.play("right");
                player.body.velocity.x = 100;       
                }
                else if(keyboard.up.isDown  ){
                player.animations.play("up");
                    player.body.velocity.y = -100;
            }
            else if(keyboard.left.isDown  ){
                player.animations.play("left");
                    player.body.velocity.x = -100;
            }
            else if(keyboard.down.isDown  ){
                player.animations.play("down");
                    player.body.velocity.y = 100;       
            }
                else{
                 player.animations.stop();
                 player.body.velocity.y = 0;   
                 player.body.velocity.x = 0;   
            }   
}
}

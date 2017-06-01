console.log("play");
playGame = {
create:function(){
    game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
    //game.input.onDown.add(gofull,game);
    music = game.add.audio('sound',1,true);
    music.loop=true;
   // audioloop(51000);
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
    btup=game.add.button(450,600,"btup",taas);
    btup.inputEnabled = true;
    btdown=game.add.button(450,700,"btdown",baba);
    btdown.inputEnabled = true;
    btleft=game.add.button(400,650,"btleft",kaliwa);
    btleft.inputEnabled = true;
    btright=game.add.button(500,650,"btright",kanan);
    btright.inputEnabled = true;
    btrestart=game.add.button(500,0,"restart",ulit);
    btrestart.inputEnabled = true;
    // btpause=game.add.button(450,0,"pause",tuloy);
    // btpause.inputEnabled = true;
    btplay=game.add.button(400,0,"play",tuloy);
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
//bestText=game.add.text(0,42,"BEST :"+getBest(),{fill: "white"} );
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
    game.physics.arcade.overlap(player,platform);
    game.physics.arcade.overlap(player,star);
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
            
           
},
gofull:function() {
  game.scale.startFullScreen(false);
},
    taas:function(){
    if(btup){
    player.animations.play("up");
    player.body.velocity.y = -1000;
    }  
    else{
            } 
    },
     baba:function(){
            if(btdown){
                player.animations.play("down");
                    player.body.velocity.y = 1000;
                  }  
                  else{
            } 
    },
     kaliwa:function(){
            if(btleft){
                player.animations.play("left");
                    player.body.velocity.x = -1000;
                  }  
                  else{   
            } 
    },
     kanan:function(){
            if(btright){
                player.animations.play("right");
                    player.body.velocity.x = 1000;
                  }  
                  else{     
            } 
    },

        kill:function(player,platform){
          score = score + 10;
  scoreText.text = "SCORE: "+score;
 if (platform.kill()) {
    gameText.text="YEHEY!";
       game.state.start('playgame','basicGame',true);
  //      score = score + 5;
  // scoreText.text = "SCORE: "+score;
  // platform.kill();
  
  // if(getBest()<score){
  //   saveBest(score);
  //   bestText.text="BEST:";
   }   
        },
        tuloy:function(){
  if (game.paused==true) {
    game.paused=false
  }
else if(game.paused==false){
  game.paused=true;
}
},

unpause:function(){
            if(game.paused){
                if(btplay.getBounds().contains(game.input.x,game.input.y)){
            game.paused=false;
            game.pauseMenu.visible-true;
        }
    }
},
ulit:function(){
game.state.start('playgame',true);
},
     saveBest:function(value){
localStorage.setItem('gameStorage',value);
},
getBest:function(){
  return ((localStorage.getItem('gameStorage') == null)|| 
    (localStorage.getItem('gameStorage')==""))
  ?0:localStorage.getItem('gameStorage');
},
 // audioloop:function(time){
 //             setInterval(function(){
 //                  music.play();
 //                  console.log("x");
 //             },time); 
 //        }
    }


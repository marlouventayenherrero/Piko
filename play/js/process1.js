
game.state.add("playgame",basicGame,true);
var gameProcess=function(){
    "use strict";
    return{
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
game.state.start('playgame','basicGame',true);
        },
     saveBest:function(value){
localStorage.setItem('gameStorage',value);
},
getBest:function(){
  return ((localStorage.getItem('gameStorage') == null)|| 
    (localStorage.getItem('gameStorage')==""))
  ?0:localStorage.getItem('gameStorage');
},
 audioloop:function(time){
         	setInterval(function(){
         		 music.play();
         		 console.log("x");
         	},time); 
        }
	}
    }();
 
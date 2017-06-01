
var w = 800, h = 600;
var game = new Phaser.Game(w, h, Phaser.CANVAS, '');
var player, keyboard;
var btup,btdown,btleft,btright,btrestart,btpause,btplay, platform, star, stars, life, score=0, scoreInterval, hi, buttonLundag, buttonIkap, textTime, time = 60;
var x = 0;
var speed = 500;
var music,kill;
var tween;
var taas,baba,kaliwa,kanan,ulit,tuloy;
var score = 0,scoreText,gameText,bestText,saveBest,getBest;

game.state.add("bootGame",bootGame);
game.state.add("loadGame",loadGame);
game.state.add("menuGame",menuGame);
game.state.add("playGame",playGame);
game.state.add("coreGame",coreGame);
//game.state.add("winGame",winGame);
//game.state.add("loseGame",loseGame);

game.state.start("bootGame");


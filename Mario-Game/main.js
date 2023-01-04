function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
  mario_coin = loadSound("coin.wav")
  mario_jump = loadSound("jump.wav")
  mario_die = loadSound("mariodie.wav")
  mario_over = loadSound("gameover.wav")
  mario_kick = loadSound("kick.wav")
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas')
	instializeInSetup(mario);

  video=createCapture(VIDEO)
  video.size(600,300)
  video.parent("console")
  poseNet=ml5.poseNet(video,modelLoaded)
  poseNet.on('pose',gotPoses)
}

function draw() {
	game()
}
function modelLoaded(){
  console.log("modelo carregado")
}
function gotPoses(results){
  if(results.length>0){
    noseX=results[0].pose.nose.x
     noseY=results[0].pose.nose.y
    
  }
}
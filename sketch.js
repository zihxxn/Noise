let x, y, nPos1, nPos2;

function setup() {
  createCanvas(400,400);
  background(255);
  x = width/2;
  y = height/2;
  
  nPos1 =  random(-1000,1000);
  nPos2 =  random(-1000,1000);
  
  nSpeed = 0.005
}

function draw() {
  
  
   let xNoise = noise(nPos1 += nSpeed);
   let yNoise = noise(nPos2 += nSpeed);
 
  let xRandom = random(0,width);
  
  let xMove = map(xNoise,0,1,0,width);
  let yMove = map(yNoise,0,1,0, height);
  
  strokeWeight('0.5');
  //fill('black')
  circle(xMove,yMove,50);
  
  print('xNoise=', xNoise);
  print('xRandom=',xRandom);
  
}
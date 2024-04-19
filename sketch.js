let fps = 60;
let vidLength = 30;

let graphic;
let sx,sy,sw,sh,dx,dy,dw,dh;

let img = [];
let imgAmt = 241;

let imgIndex;
let sizeIndex = 0;

let x = 0;
let y = 0;
let stepSize;

let size = [50,100,150,200,250,300];

function preload(){
  for(let i = 0; i < imgAmt; i++){
    img[i] = loadImage('Images/' + (i) + '.jpeg');
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  background(0);
}

function draw() {
  //   if (frameCount === 1) {
  //   capturer.start();
  // }

  imgIndex = floor(random(0,imgAmt)); 

let imgWidth = size[sizeIndex];
let imgHeight = img[imgIndex].height * (imgWidth / img[imgIndex].width);

graphic = createGraphics(imgWidth, imgHeight); 
graphic.push();
graphic.imageMode(CENTER);
graphic.translate(graphic.width/2,graphic.height/2); 
graphic.image(img[imgIndex],0,0,imgWidth,imgHeight); 
graphic.pop();

  stepSize = size[sizeIndex]; 

  if(frameCount % 5 == 0){
  x += stepSize;
  }

  if(x + stepSize > windowWidth * 1.1){ 
    x = 0;
    y += size[sizeIndex];
    sizeIndex = floor(random(0,size.length)); 
  }

  if(y + size[sizeIndex] > windowHeight * 1.15){ 
    y = 0;
  }
  image(graphic,x,y,size[sizeIndex],size[sizeIndex]); 

  //   if (frameCount < fps * vidLength) {
  //   capturer.capture(canvas);
  // } else if (frameCount === fps * vidLength) {
  //   capturer.save();
  //   capturer.stop();
  // }
}

function keyPressed() {
  if(key == 's'){
    saveCanvas('background_v1', 'png');
  }
}
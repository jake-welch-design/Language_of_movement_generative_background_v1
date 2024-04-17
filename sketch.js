let graphic;

let img = [];
let imgAmt = 241;

let imgIndex;
let sizeIndex = 0;

let x = 0;
let y = 0;
let xSpeed;

let size = [50,100,150,200,250,300];

function preload(){
  for(let i = 0; i < imgAmt; i++){
    img[i] = loadImage('Images/' + (i) + '.jpeg');
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  imgIndex = floor(random(0,imgAmt)); 

let imgWidth = size[sizeIndex];
let imgHeight = img[imgIndex].height * (imgWidth / img[imgIndex].width);

graphic = createGraphics(imgWidth, imgHeight); 
graphic.push();
graphic.imageMode(CENTER);
graphic.translate(graphic.width/2,graphic.height/2); 
graphic.image(img[imgIndex],0,0,imgWidth,imgHeight); 
graphic.pop();

  xSpeed = size[sizeIndex]; 
  x += xSpeed;

  if(x + xSpeed > windowWidth * 1.1){ 
    x = 0;
    y += size[sizeIndex];
    sizeIndex = floor(random(0,size.length)); 
  }

  if(y + size[sizeIndex] > windowHeight * 1.1){ 
    y = 0;
  }
  image(graphic,x,y,size[sizeIndex],size[sizeIndex]); 
}
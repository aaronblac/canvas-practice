var context = null;//on-screen canvas context
var canvas = null;//main page canvas
var bufferCanvas = null;//off-screen canvas
var bufferCanvasCtx = null;// off-screen canvas context
var flakeArray = [];//array to hold snowflakes
var flakeTimer = null;//timer for addng new flakes
var maxFlakes = 200;// max# of flakes on screen

function Flake(){
    this.x = Math.round(Math.random() * context.canvas.width);
    this.y = -10;
    this.drift = Math.random();
    this.speed = Math.round(Math.random() * 3) + 1;
    this.width = (Math.random() * 3) +8; //add on to widen
    this.height = this.width + (Math.random() *10 +5);  //add on to lengthen
    this.angle = 0;
    this.color = randomColor();
}

function init() {
    //get the canvas and a reference to the drawing context
    canvas = document.getElementById('testCanvas');
    context = canvas.getContext('2d');

    //build the off-screen canvas and get its context
    bufferCanvas = document.createElement('canvas');
    bufferCanvasCtx = bufferCanvas.getContext('2d');
    bufferCanvasCtx.canvas.width = context.canvas.width;
    bufferCanvasCtx.canvas.height = context.canvas.height;

    //create a clipping region
    // bufferCanvasCtx.beginPath();
    // bufferCanvasCtx.fillStyle="black";
    // bufferCanvasCtx.fillRect(0,0,bufferCanvas.width,bufferCanvas.height);

    // bufferCanvasCtx.arc(bufferCanvas.width/2, bufferCanvas.height/2,bufferCanvas.height/2,0,2* Math.PI);
    // bufferCanvasCtx.clip();

    //initialize the flake objects
    flakeTimer = setInterval(addFlake, 200);

    //draw the initial canvas state 
    draw();

    requestAnimationFrame(animate);
}

function addFlake() {
    flakeArray[flakeArray.length] = new Flake();
    if (flakeArray.length == maxFlakes){
        clearInterval(flakeTimer)
    }
}

function blank() {
    bufferCanvasCtx.fillStyle = "#fff";
    bufferCanvasCtx.fillRect(0,0,bufferCanvasCtx.canvas.width,bufferCanvasCtx.canvas.height);

}

function animate() {
    blank();
    update();
    draw();
    requestAnimationFrame(animate);
}

function update() {
    for(var i = 0; i < flakeArray.length; i++){
        if (flakeArray[i].y < context.canvas.height){
            flakeArray[i].y += flakeArray[i].speed;
            if(flakeArray[i].y > context.canvas.height)
                flakeArray[i].y = -5;
                flakeArray[i].x += flakeArray[i].drift;
            
            if(flakeArray[i].x > context.canvas.width)
                flakeArray[i].x = 0;
            
        }
    }
}

function randomColor() {
    var colors = ['red','blue','green','pink','yellow'];
    return colors[Math.floor(Math.random() * colors.length)];
}
// function rotateRect(){
//     bufferCanvasCtx.translate(flakeArray[i].width/2, flakeArray[i].height/2);
//     bufferCanvasCtx.rotate(angle);

//     if (angle > 3.14){
//         angle = 0;
//     }
//     angle = angle + .10;
// }

// function moveRect() {
//     bufferCanvasCtx.clearRect(0,0,flakeArray[i].width,flakeArray[i].height);
//     bufferCanvasCtx.save();
//     rotateRect();
//     bufferCanvasCtx.restore();

// }
function draw() {
    context.save();

    //draw each one of the updated snowflakes
    for (let i = 0; i < flakeArray.length; i++){
        
        bufferCanvasCtx.fillStyle=flakeArray[i].color;
        bufferCanvasCtx.fillRect(flakeArray[i].x, flakeArray[i].y,flakeArray[i].width,flakeArray[i].height);
        
    }
    
    //copy the entire rendered image from the buffer canvas to the 
    context.drawImage(bufferCanvas, 0,0,bufferCanvas.width, bufferCanvas.height);
    
    
    context.restore();
}

window.addEventListener("load", init);
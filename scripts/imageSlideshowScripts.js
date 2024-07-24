let imagePaths = [
    "/images/bg-confirm.jpg", "/images/sample.jpg", "/images/hat_isolated.png"
];
let showCanvas = null;
let showCanvasCtx = null;
let img = document.createElement('img');
let currentImage =0;
let revealTimer;
let gAlpha = 0.1;
let now = null;
let FADE_DELAY = 20;//delay for each alpha element
let IMAGE_DELAY = 3000;///how long to show each image

const init = () => {
    //reference to the canvas and drawing context
    showCanvas = document.getElementById('showCanvas');
    showCanvasCtx = showCanvas.getContext('2d');

    //set width and height of the img elemnt to match img dimentions
    img.setAttribute('width', '600');
    img.setAttribute('height', '400');

    //show the initial image
    switchImage();

    //start animation
    setInterval(switchImage, IMAGE_DELAY);
}
const revealImage = (timestamp) => {
    //smooth animation transition
    if(!now)
        now = timestamp;
    if((timestamp-now) > FADE_DELAY){
        gAlpha += 0.01;
        showCanvasCtx.globalAlpha = gAlpha;
        showCanvasCtx.drawImage(img,0,0,600,400);
        now = timestamp;

    }
    if(gAlpha < 1.0)
        requestAnimationFrame(revealImage);
}

//switches image lays one over the other
const switchImage = () => {
    //get the next image in the array
    img.setAttribute('src', imagePaths[currentImage++]);
    if(currentImage >= imagePaths.length)
    currentImage=0;
    

    gAlpha = 0.0;
requestAnimationFrame(revealImage);

}
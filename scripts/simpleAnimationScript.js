let rectY = 200, rectW = 40;
let rectX = -rectW;//starts rect off canvas
let canvas = null;
let context = null;

const init = () => {
    canvas = document.getElementById('testCanvas');
    context = canvas.getContext('2d');
    
    blank();

    //draw init state of canvas
    context.fillStyle = "yellow";
    context.fillRect(rectX,rectY,rectW,rectW);

    //start the animation by requsting a time slice to draw the scene updates
    requestAnimationFrame(anim);
}

const blank = () => {
    context.fillStyle = "#00ddee";
    context.fillRect(0,0,context.canvas.width,context.canvas.height);
}
const anim = () => {
    if(rectX < context.canvas.width){
        blank();
        rectX += 5;
        context.fillStyle="yellow";
        context.strokeStyle="red";
        context.lineWidth= 3;
        context.fillRect(rectX,rectY,rectW,rectW);
        context.strokeRect(rectX,rectY,rectW,rectW);
    }else{
        rectX = -rectW;//resets it back off canvas
    }
    requestAnimationFrame(anim);
}

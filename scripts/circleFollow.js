const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");


let canvasPos = getPosition(canvas);
let mouseX = 0;
let mouseY = 0;
canvas.addEventListener("mousemove", setMousePosition, false);

const setMousePosition = (e) =>{
    mouseX = e.clientX - canvasPos.x;;
    mouseY =e.clientY - canvasPos.y;
}



const init = ()=>{
    if(canvas &&canvas.getContext){
        if(context){
            context.fillStyle = "blue";
            context.strokeStyle = "black";
            context.beginPath();
            context.arc(mouseX,mouseY,50,0, 2 * Math.PI, true);
            context.stroke();
            context.fill();
        }
    } 
    requestAnimationFrame(init);
}

init();


const getPosition = (el)=>{
    let xPosition = 0;
    let yPosition = 0;
    
    while (el){
        xPosition += (el.offsetLeft - el.scrollLeft + el.clientLeft);
        yPosition += (el.ofssetTop - el.scrollTop + el.clientTop);
        el= el.offsetParent;
    }
    return{
        x: xPosition,
        y: yPosition
    };
}
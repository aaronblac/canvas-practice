window.addEventListener("load",()=>{
    let canvas = document.getElementById('canvas1');
    if (canvas && canvas.getContext){
        let ctx = canvas.getContext('2d');
        if (ctx){
            ctx.fillStyle="blue";
            ctx.fillRect(0,0,100,50);

            //translate the origin to the middle of the canvas
            ctx.translate(ctx.canvas.width/2,ctx.canvas.height/2);

            ctx.fillRect(0,0,100,50);
        }
    }
})
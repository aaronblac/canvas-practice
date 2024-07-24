window.addEventListener("load",()=>{
    let canvas = document.getElementById('canvas1');
    if(canvas && canvas.getContext){
        let ctx = canvas.getContext('2d');
        if (ctx){
            // ctx.fillStyle="blue";
            // ctx.fillRect(150,30, 100,50);

            //rotate the rect by half a radian
            // ctx.rotate(0.5); //rotates relative to the origin above not the actual shape
            // ctx.fillRect(150,30, 100,50);//draws from that position as the starting point  

            //rotate object around a different point by using translate
            ctx.translate(ctx.canvas.width/2, ctx.canvas.height/2); //the origin point is now at center of canvas
            let radian = (Math.PI/180) *10;
            for(let degrees = 0; degrees < 360; degrees += 10) {
                ctx.rotate(radian);//every loop it rotates 10deg(radian) around the origin point set with ctx.translate
                ctx.beginPath();
                ctx.moveTo(-100,0);//from origin point set by ctx.translate
                ctx.lineTo(100,0);//same as above
                ctx.stroke();
            }
        }
    }
})
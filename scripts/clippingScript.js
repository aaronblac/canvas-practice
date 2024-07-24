window.addEventListener("load",()=>{
    let canvas = document.getElementById('canvas1');
    if(canvas && canvas.getContext){
        let ctx = canvas.getContext('2d');
        if(ctx){
            //draw an image
            var srcImg = document.getElementById('img1');

            //create a circle clipping path
            // ctx.arc(ctx.canvas.width/2,ctx.canvas.height/2, 150,0, 2*Math.PI);//creates a circle from the center of the canvas
            // ctx.clip();//clips the circle and displays whats inside

            //create and arbitrary clipping path
            ctx.beginPath();
            ctx.moveTo(105,200);
            ctx.lineTo(250,25);
            ctx.lineTo(525,50);
            ctx.lineTo(475,285);
            ctx.closePath();
            ctx.clip();

            //render the image into the canvas
            ctx.drawImage(srcImg, 0,0,700,300);

        }
    }
})
window.addEventListener("load",()=>{
    let canvas = document.getElementById('canvas1');
    if (canvas && canvas.getContext){
        let ctx = canvas.getContext('2d');
        if(ctx){
            ctx.fillStyle="blue";
            ctx.fillRect(0,0,100,50);

            //translate the origin to the middle of the canvas using
            //a custom translation matrix
            //(a translate operation is defined as:)
            // 1 0 tx
            // 1 0 ty
            // 0 0 1
            let tx = ctx.canvas.width/2; //translates origin x
            let ty = ctx.canvas.height/2;//translates origin y
            ctx.fillStyle="red";
            ctx.save();
            ctx.transform(1,0,0,1,tx,ty);
            ctx.fillRect(0,0,100,50);
            ctx.restore();

            //set the current transform to a skewing o
            //(a skew transform is defined as;)
            // 1  sx 0
            // sy 1  0
            // 0  0  1
            let sx = 0; //skews on x axis
            let sy = 0.3;//skews on y axis
            ctx.fillStyle="green";
            ctx.setTransform(1,sy,sx,1,0,0); 
            ctx.fillRect(200,20,100,50);
        }
    }
})
const load = ()=>{
    let canvas = document.getElementById('canvas1');
    if(canvas && canvas.getContext){
        let ctx = canvas.getContext('2d');
        if(ctx){
            // //create a pattern from an image
            // let patImg = new Image();
            // patImg.onload = ()=>{
            //     ctx.fillStyle= ctx.createPattern(patImg,"repeat");
            //     ctx.fillRect(0,0,ctx.canvas.width,ctx.canvas.height);
            // }

            // patImg.src="images/animal-waste-cleanup.png";
            //create a pattern from a video
            // setTimeout(function(){
            //     let vid=document.getElementById('vidEl');
            //     let canvas=document.getElementById('canvas1');
            //     let ctx = canvas.getContext('2d');
            //     let vidPat = ctx.createPattern(vid,"repeat"); //repeats the vid pattern
            //     ctx.fillStyle = vidPat;//fills the rectangle with the pattern
            //     ctx.fillRect(0,0,ctx.canvas.width,ctx.canvas.height);
            // }, 5000);//times out at 5sec and grabs the image from the vid 5 sec in

            //create a pattern from another canvas

            let patCanvas = document.getElementById('patCan');
            let patCtx = patCanvas.getContext('2d');
            patCtx.strokeStyle = "red";
            patCtx.lineWidth = 1;
            patCtx.beginPath();
            patCtx.moveTo(0,0);
            patCtx.lineTo(25,25);
            patCtx.stroke(); 

            //using that canvas as a pattern
            let strokePat = ctx.createPattern(patCanvas,"repeat"); //repeats the vid pattern
            ctx.strokeStyle = strokePat;//fills the rectangle with the pattern
            ctx.lineWidth=25;
            ctx.strokeRect(50,50,200,200);
            // ctx.fillRect(0,0,ctx.canvas.width,ctx.canvas.height);
        }
    }
}
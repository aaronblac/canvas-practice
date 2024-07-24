const draw = ( ) =>{
    let canvas = document.getElementById('canvas1');
    if (canvas && canvas.getContext){
        let ctx = canvas.getContext('2d');
        if(ctx){
            //linear Gradient
            let grd = ctx.createLinearGradient(0,0,300,0);//(xstart,ystart,xend,yend) from one coordinates to another
            grd.addColorStop(0, "blue");//starts blue at 0%; can add as many colors between 0 and 1 
            grd.addColorStop(1, "orange");//ends orange at 100%; transitions between
            ctx.fillStyle=grd;           
            ctx.fillRect(20,20,300,200);
            //radial gradient..making two circles where the gradient goes from first to second regardless of shape it fills
            let grdRad = ctx.createRadialGradient(400,150,20,400,150,50);//(xmiddlepoint,ymiddlepoint,radius,y2middlepoint,y2middlepoint,radius2)
            grdRad.addColorStop(0, "orange");
            grdRad.addColorStop(.5, "red");
            grdRad.addColorStop(1,"blue");
            ctx.fillStyle=grdRad;
            ctx.beginPath();
            ctx.arc(400,150,50,0,Math.PI *2);
            ctx.fill();
            ctx.stroke();

            //vertical diagonal linear gradient with border
            let grd1 = ctx.createLinearGradient(520,20,620,200);//(xstart,ystart,xend,yend) from one coordinates to another
            grd1.addColorStop(0, "blue");//starts blue at 0%; can add as many colors between 0 and 1 
            grd1.addColorStop(.5, "red");
            grd1.addColorStop(1, "orange");//ends orange at 100%; transitions between
            
            ctx.lineWidth=5;
            ctx.fillStyle=grd1;           
            ctx.fillRect(520,20,100,200);
            ctx.strokeRect(520,20,100,200);
        }
    }
}
const draw = ()=> {
    let canvas = document.getElementById('canvas1');
    if (canvas && canvas.getContext){
        let ctx = canvas.getContext('2d');
        if (ctx){
            //basic shadow settings
            ctx.shadowColor ="#000000";
            ctx.shadowOffsetX = 10;
            ctx.shadowOffsetY = 10;
            ctx.shadowBlur=10;
            
            //draw a simple rectangle with a shadow effect
            ctx.fillStyle="blue";
            ctx.fillRect(50,50,100,200);


            let theString = "Drawing Text on a Canvas";
            //draw the string with some font information
            let startX = 180;
            ctx.shadowOffsetX = -10;
            ctx.shadowOffsetY = -10;
            ctx.font="32pt Roboto";
            //change the shadow setting to be a bit lighter
            ctx.shadowColor = "#191919";
            ctx.fillText(theString,startX,150, 200);
            ctx.strokeText(theString,startX,150, 200)
            //draw a red line with a purplish shadow
           
            let textW = ctx.measureText(theString);
            ctx.shadowOffsetX = 10;
            ctx.shadowOffsetY = 10;
            ctx.strokeStyle = "red";
            ctx.shadowColor="purple";
            ctx.lineWidth=10;
            ctx.lineCap="round"
            ctx.beginPath();
            ctx.moveTo(startX, 170);
            ctx.lineTo(startX+Math.round(textW.width), 170);
            ctx.stroke();
        }
    }
}
const draw = ()=>{
    var canvas = document.getElementById('canvas1');
        if(canvas && canvas.getContext){
            var ctx = canvas.getContext('2d');
            if(ctx){
                var theString = "This is text I'm drawing on Canvas";
                var startX = 20;
                //draw string with some font information
                ctx.font ="25px Georgia";
                ctx.fillText(theString, startX, 60);
                //draw string with a fillStyle color
                ctx.fillStyle="blue";
                ctx.fillText(theString, startX, 100);
                //draw the string with both a stroke and a fill
                ctx.font = "32px Verdana";
                ctx.fillStyle = "yellow";
                ctx.strokeStyle="rgba(0,255,0,0.8)";
                ctx.fillText(theString, startX, 160);
                ctx.strokeText(theString, startX, 160);
                //measure text to draw a line under text
                var textW = ctx.measureText(theString);
                ctx.beginPath();
                ctx.strokeStyle="black";
                ctx.moveTo(startX,170);
                ctx.lineTo(startX+Math.round(textW.width),170);
                ctx.stroke();
            }
        }
}
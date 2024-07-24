window.addEventListener("load",()=>{
    var canvas = document.getElementById('canvas1');
    if(canvas && canvas.getContext){
        var ctx = canvas.getContext('2d');
        if(ctx){
            ctx.strokeStyle="blue";
            ctx.fillStyle="red";
            ctx.lineWidth=5;

            //draw an open path - not closed
            ctx.beginPath();
            ctx.moveTo(25,175);
            ctx.lineTo(50,25);
            ctx.lineTo(125,50);
            ctx.lineTo(175,175);
            ctx.stroke();

            //draw a closed path
            ctx.beginPath();
            ctx.moveTo(225,175);
            ctx.lineTo(250,25);
            ctx.lineTo(325,50);
            ctx.lineTo(375,175);
            ctx.closePath();
            ctx.stroke();

            //draw line and fill unclosed path
            ctx.beginPath();
            ctx.moveTo(425,175);
            ctx.lineTo(450,25);
            ctx.lineTo(525,50);
            ctx.lineTo(575,175);
            ctx.fill();//fill only fills to where the closePath()line would be
            ctx.stroke();
        }
    }
})
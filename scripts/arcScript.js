window.addEventListener("load",()=>{
    var canvas = document.getElementById('canvas1');
    if(canvas && canvas.getContext){
        var ctx = canvas.getContext('2d')
        if (ctx){
            ctx.strokeStyle="blue";
            ctx.fillStyle="red";
            ctx.lineWidth=5;

            //stroke a quarter arc
            ctx.beginPath();
            ctx.arc(50,150,100,0,Math.PI * .5);//arc(x,y,radius,start point in radions, arc of circle, [anticlockwise(always set to false)])
            ctx.stroke();
            //stroke a half arc, going anti-clockwise
            ctx.beginPath();
            ctx.arc(250,150,50,0,Math.PI,true);//Math.PI = half circle
            ctx.stroke();
            //stroke and fill a circle
            ctx.beginPath();
            ctx.arc(370,150,50,0,Math.PI *2);
            ctx.fill();
            ctx.stroke();
        }
    }
})
const draw = ()=>{
    var canvas = document.getElementById('canvas1');
    if(canvas && canvas.getContext){
        var ctx = canvas.getContext('2d');
        if(ctx){
            ctx.strokeStyle="blue";
            ctx.lineWidth=5;

            //stroke a simple bezier curve
            ctx.beginPath();
            ctx.moveTo(50,100);
            ctx.bezierCurveTo(50,200,300,200,300,100);
            ctx.stroke();

            //make control points visible
            ctx.strokeStyle="rgba(0,0,0,.25)";
            ctx.lineWidth=1;
            ctx.beginPath();
            ctx.moveTo(50,100);
            ctx.lineTo(50,200);
            ctx.lineTo(300,200);
            ctx.lineTo(300,100);
            ctx.stroke();


            //stroke a quadratic curve
            ctx.strokeStyle="green";
            ctx.lineWidth=5;
            ctx.beginPath();
            ctx.moveTo(350,100);
            ctx.quadraticCurveTo(350,300,600,100);
            ctx.stroke();
            //make control points visible

            ctx.strokeStyle="rgba(0,0,0,.25)";
            ctx.lineWidth=1;
            ctx.beginPath();
            ctx.moveTo(350,100);
            ctx.lineTo(350,300);
            ctx.lineTo(600,100);
            ctx.stroke();
        }
    }
}
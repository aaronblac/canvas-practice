
    var canvas = document.getElementById('canvas1');
    if (canvas && canvas.getContext) {
        var ctx = canvas.getContext('2d');

            if(ctx) {
                ctx.strokeStyle = "blue";
                ctx.strokeRect(30,30,300,200);
                ctx.fillStyle = "red";
                ctx.fillRect(50, 50, 100, 200);
                ctx.strokeStyle="green";
                ctx.lineWidth=10;
                ctx.fillStyle ="yellow";
                ctx.strokeRect(160, 50, 100, 200);
                ctx.fillRect(160,50,100,200);
                ctx.clearRect(60, 60, 150,50);
            }
       
    }


window.addEventListener("load", ()=> {
    //drawing state
    var canvas = document.getElementById('canvas1');
    if(canvas && canvas.getContext){
        var ctx = canvas.getContext('2d');
        if (ctx){
            //drawing information
            ctx.strokeStyle = "red";
            ctx.fillStyle = "yellow";
            ctx.lineWidth = 10;

            //draw first rectangle
            ctx.fillRect(25,25,100,125);
            ctx.strokeRect(25,25,100,125);

            //draw another rectangle with different settings
            ctx.save();//saved original state above

            ctx.strokeStyle ="green";
            ctx.fillStyle="blue";
            ctx.lineWidth="5";
            ctx.fillRect(175,25,100,125);
            ctx.strokeRect(175,25,100,125);

            //restore original settings
            ctx.restore();//restored settings after save

            //draw a stroked and filled rectngle
            ctx.fillRect(325, 25,100,125);
            ctx.strokeRect(325, 25,100,125);


        }
    }
})
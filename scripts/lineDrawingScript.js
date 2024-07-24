window.addEventListener("load", function () {

        var canvas = document.getElementById("canvas1")
        if (canvas && canvas.getContext){
            var ctx = canvas.getContext('2d');
            if (ctx){
                //various lines 
                for(var i = 0; i < 10; i++){
                    ctx.beginPath();
                    ctx.lineWidth = i+1;
                    ctx.moveTo(25, 25+i*15);
                    ctx.lineTo(475, 25+i*15);
                    ctx.stroke();
                }
            }
        }

        var canvas = document.getElementById("canvas2")
        if (canvas && canvas.getContext){
            var ctx = canvas.getContext('2d');
            if (ctx){
                ctx.strokeStyle = "green";
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(50,20);
                ctx.lineTo(50, 180);
                ctx.moveTo(450,20);
                ctx.lineTo(450,180);
                ctx.stroke();

                //Line caps
                ctx.lineWidth = 25;
                ctx.strokeStyle = "black";
                ctx.lineCap="butt";
                ctx.beginPath();
                ctx.moveTo(50,50);//moves pen
                ctx.lineTo(450,50);//draws line
                ctx.stroke();//initiates the line draw

                ctx.lineCap="round";
                ctx.beginPath();
                ctx.moveTo(50,100);//moves pen
                ctx.lineTo(450,100);//draws line
                ctx.stroke();//initiates the line draw

                ctx.lineCap="square";
                ctx.beginPath();
                ctx.moveTo(50,150);//moves pen
                ctx.lineTo(450,150);//draws line
                ctx.stroke();//initiates the line draw
            }
        }
//lineJoin
        var canvas = document.getElementById("canvas3")
        if (canvas && canvas.getContext){
            var ctx = canvas.getContext('2d');
            if (ctx){
                ctx.lineWidth = 15;
                ctx.strokeStyle = "black";

                ctx.lineJoin="round";//style the lines are joined
                ctx.beginPath();
                ctx.moveTo(25,150);//moves pen
                ctx.lineTo(75,50);//draws line
                ctx.lineTo(125,50);//draws another line
                ctx.stroke();//initiates the line draw

                ctx.lineJoin="bevel";//style the lines are joined
                ctx.beginPath();
                ctx.moveTo(175,150);//moves pen
                ctx.lineTo(225,50);//draws line
                ctx.lineTo(275,50);//draws another line
                ctx.stroke();//initiates the line draw

                ctx.lineJoin="miter";//style the lines are joined
                ctx.beginPath();
                ctx.moveTo(325,150);//moves pen
                ctx.lineTo(375,50);//draws line
                ctx.lineTo(425,50);//draws another line
                ctx.stroke();//initiates the line draw
            }
        }
//Dashed LInes
        var canvas = document.getElementById("canvas4")
        if (canvas && canvas.getContext){
            var ctx = canvas.getContext('2d');
            if (ctx){
                ctx.lineWidth=15;
                ctx.strokeStyle="black";

                ctx.setLineDash([5,10]);//draws 5px and skips 10px
                ctx.beginPath();
                ctx.moveTo(50, 50);//moves pen
                ctx.lineTo(450,50);//draws line
                ctx.stroke();//initiates the line draw

                ctx.setLineDash([15,5]);//draws 15px and skips 5px
                ctx.beginPath();
                ctx.moveTo(50, 100);//moves pen
                ctx.lineTo(450,100);//draws line
                ctx.stroke();//initiates the line draw

                ctx.setLineDash([]);//draws solid line and takes out dashes
                ctx.beginPath();
                ctx.moveTo(50, 150);//moves pen
                ctx.lineTo(450,150);//draws line
                ctx.stroke();//initiates the line draw
            }
        }
})
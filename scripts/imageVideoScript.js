window.addEventListener("load", function (){
    var canvas = document.getElementById('canvas1');
    if(canvas && canvas.getContext){
        var ctx = canvas.getContext('2d');
        if(ctx){
            var srcImg = document.getElementById('img1');
            //draw an image directly onto to the canvas at the top
            // ctx.drawImage(srcImg,0,0);

            //draw the image scaled down onto the canvas
            // ctx.drawImage(srcImg,50,50,350,150);//makes a rectangle and fits image inside

            //draw just a portion of the source image onto the canvas
            // ctx.drawImage(srcImg,350,100,100,100,30,30,100,100);//first four numbers is what section of the pic is being pulled from 
                                                                //image, second four is the rectangle that is being formed
                                                                //on the page
            
            //draw the video onto the canvas.  we need to request
            //in order to grab each frame from the video and paint it
            //onto the canvas
            function drawVidFrame(){
                var canvas = document.getElementById('canvas1');
                var ctx = canvas.getContext('2d');
                var srcVid = document.getElementById('vid1');
                ctx.drawImage(srcVid, 0,0,ctx.canvas.width,ctx.canvas.height);
                requestAnimationFrame(drawVidFrame);//calls function to loop and grabs each frame of the video onto the canvas

            }
            requestAnimationFrame(drawVidFrame);//will start the loop to play full video
        }
    }
})
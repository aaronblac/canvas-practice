window.addEventListener("load",()=>{
    let canvas = document.getElementById('canvas1');
    if (canvas && canvas.getContext){
        let ctx = canvas.getContext('2d');
        if(ctx){
            ctx.fillStyle="blue";
            ctx.fillRect(0,0,100,50);

            //perform a scale transform and draw the same size rectangle
            ctx.save();//saves original state 
            ctx.scale(2,2);
            ctx.fillRect(125,50,100,50);
            ctx.restore();//restores original state

            //if i put another drawing here to scale it would be based off of the original rect
            //because I saved before last and restored the state before another drawing so it 
            //reverts to original scale
        }
    }
})
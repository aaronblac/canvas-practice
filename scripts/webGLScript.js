window.addEventListener("load",()=>{
    const canvas = document.getElementById('glCanvas');
    const gl = canvas.getContext("webgl");
    if (gl === null){
        alert('unable to initialize WebGL.  Your browser or machine might not support it');
        return;
    }

    gl.clearColor(0.0,0.0,0.0,1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    //not complete
})
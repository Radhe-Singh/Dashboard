window.requestAnimationFrame = function (){
    return(
        window.requestAnimationFrame||
        window.webkitRequestAnimationFrame||
        window.mozRequestAnimationnFrame||
        window.oRequestAnimationnFrame||
        window.msRequestAnimationnFrame||
        function (callback){
          window.setTimeout(callback);
        }
    );
};
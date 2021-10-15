function play() {

    var m=0;
    var x=document.getElementById('bird');
    x.style.bottom=((Math.random()*60 + 60)) + "px";
    var flag=1;
    document.getElementById("playButton").style.visibility = "hidden";
    var i = 0;
    const pos = 20;
    var k = 0;
    var mario = document.getElementById('mario');
    var t=0;
    var c = document.getElementById('coin');
    var o=0;
    var e=document.getElementById('bird2');
    var d=document.getElementById('dragon');
    var h=0,n=0;
    
    var timer=setInterval(function enemy(){
        var bird=['images/bird1.png','images/bird2.png'];
       
       
        if(x.offsetLeft<=0){
            x.style.left=1300 + "px";
            x.style.bottom=((Math.random()*60 + 100)) + "px";
        }
        else{
            x.style.left=x.offsetLeft-30 + "px";
            x.style.backgroundImage='url(' +  bird[m] + ')';
            m++;
            if(m==2){
                m=0;
            }

        }
    },100);

    var timers=setInterval(function enemy(){
        var bird=['images/bird1.png','images/bird2.png'];
       
       
        if(e.offsetLeft<=0){
            e.style.left=1700 + "px";
            e.style.bottom=((Math.random()*60 + 100)) + "px";
        }
        else{
            e.style.left=e.offsetLeft-30 + "px";
            e.style.backgroundImage='url(' +  bird[m] + ')';
            m++;
            if(m==2){
                m=0;
            }

        }
    },100);


    setTimeout(function stop(){

        clearInterval(timer);
        clearInterval(timers);
        e.style.visibility="hidden";
        x.style.visibility="hidden";

    },60000);

     // keys control--------------------------------------------


     window.addEventListener('keydown', function (event) {
        if (event.key === "ArrowRight") {
            mario.style.height="100px";
            flag=1;
             var img = ['images/mario2.png', 'images/mario3.png', 'images/mario4.png'];
            if (mario.offsetLeft < (window.innerWidth - 60)) {
                mario.style.left = mario.offsetLeft + pos + "px";
                if (i == 3) {
                    i = 0;
                }
                mario.style.backgroundImage = 'url(' + img[i] + ')';
                i++;
            }
        }
    })

   
    window.addEventListener('keydown', function (event) {
        if (event.key === "ArrowDown") {

            
             
            if (flag==1) {
                mario.style.backgroundImage = 'url(images/downr.png)';
                mario.style.height="60px";
            }
            else if(flag==0){
                mario.style.backgroundImage = 'url(images/downl.png)';
                mario.style.height="60px";
                mario.style.bottom="60px";
            }
        }
    })

    window.addEventListener('keydown', function (event) {
        if (event.key === "ArrowUp") {

            
             
            if (flag==1) {
                mario.style.backgroundImage = 'url(images/mario1.png)';
                mario.style.height="100px";
                mario.style.bottom="60px";
            }
            else if(flag==0){
                mario.style.backgroundImage = 'url(images/mario5.png)';
                mario.style.height="100px";
                mario.style.bottom="60px";
            }
        }
    })

    window.addEventListener('keydown', function (event) {
        
        if (event.key === "ArrowLeft") {
            flag=0;
            mario.style.height="100px";
            var image = ['images/mario5.png', 'images/mario6.png', 'images/mario7.png', 'images/mario8.png'];
            if (mario.offsetLeft > 0) {
                mario.style.left = mario.offsetLeft - pos + "px";
                if (k == 3) {
                    k = 0;
                }
                mario.style.backgroundImage = 'url(' + image[k] + ')';
                k++;
            }
        }
    })

    window.addEventListener('keydown',function(event){
        

        if(event.key===" "){
            mario.style.height="100px";

            
            if(flag==1){
                mario.style.backgroundImage='url(images/mario1.png)';

            }
            if(flag==0){

                mario.style.backgroundImage='url(images/mario5.png)';

            }
            if(mario.offsetTop>=465){
                mario.style.bottom=280 + "px";

                setTimeout(function jump(){

                    mario.style.bottom="60px";

                },350);
               

            }

        }
     })

    // -----------coin logic------------------------------- 
    f();
    setInterval(() => {
        f();
        c.style.bottom = (Math.random()*120 + 200) + "px";
        c.style.left = (Math.random()*1200 + 50) + "px";
        }, 3000);
    

    function f(){
    var coi = setInterval(function coinanimate(){

    var co=['images/coin2.png','images/coin3.png','images/coin4.png','images/coin5.png','images/coin6.png','images/coin1.png'];
    if(o==6){
        o=0;
    }
    else{
        
        c.style.backgroundImage='url(' + co[o] + ')';
        o++;
    }

    setTimeout(() => {
        clearInterval(coi);
    }, 5000);
},100);

}
// -------------------------------------------------------------


//Dragon -------------------------------------------------------

setTimeout(() => {

    Drag();
    
}, 1000);

function Drag(){

    setInterval(function dragonanimate(){

        var dragonn=['images/dragon2.png','images/dragon3.png','images/dragon4.png','images/dragon1.png'];
        if(h==4){
            h=0;
        }
        else{
            d.style.backgroundImage='url(' + dragonn[h] + ')';
            h++;
            if(d.offsetLeft>600 && n==0){
                d.style.left=(d.offsetLeft - 20) + "px";
            }
            if(d.offsetLeft==600){
               n=1;
            }
            if(n==1 && d.offsetLeft<window.innerWidth){
                d.style.left=(d.offsetLeft + 20) + "px";
            }
            if(d.offsetLeft>=(window.innerWidth-300)){
                n=0;
            }
            

        }
    },55);
}


    
}

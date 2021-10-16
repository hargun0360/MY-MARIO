function start() {

    var score=0;
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
    var fire=document.getElementById('fire');
    var theme=document.getElementById('theme');
    var won=document.getElementById('won');
    var collide=document.getElementById('collide');
    var jumped=document.getElementById('jumped');
    var coined=document.getElementById('coined');
    var come=document.getElementById('come');
    var sc=document.getElementById('sc');
    var over=document.getElementById('over');
    var scr=document.getElementById('scr');
    var scoree=document.getElementById('scoree');
    var scrr=document.getElementById('scrr');

    mario.style.visibility="visible";
    c.style.visibility="visible";
    x.style.visibility="visible";
    e.style.visibility="visible";
    sc.style.visibility="visible";
    var option;
    var speed=20;
    var firespeed=10;
    var dragonspeed=20;
    

    theme.play();
    
    var timer=setInterval(function enemy(){
        var bird=['images/bird1.png','images/bird2.png'];
       
       
        if(x.offsetLeft<=0){
            x.style.left=1300 + "px";
            x.style.bottom=((Math.random()*60 + 100)) + "px";
        }
        else{
            if((mario.offsetLeft<x.offsetLeft + 35 && mario.offsetLeft + 40 > x.offsetLeft)
        &&(mario.offsetTop<x.offsetTop + 30 && mario.offsetTop+50 >x.offsetTop)){
             collide.play();
             gameover();
            
       
       }
            x.style.left=x.offsetLeft-speed + "px";
            x.style.backgroundImage='url(' +  bird[m] + ')';
            m++;
            if(m==2){
                m=0;
            }
            

        }
    },80);

    var timers=setInterval(function enemy(){
        var bird=['images/bird1.png','images/bird2.png'];
       
       
        if(e.offsetLeft<=0){
            e.style.left=1700 + "px";
            e.style.bottom=((Math.random()*60 + 100)) + "px";
        }
        else{

            e.style.left=e.offsetLeft-speed + "px";
            e.style.backgroundImage='url(' +  bird[m] + ')';
            m++;
            if(m==2){
                m=0;
            }
            if((mario.offsetLeft<e.offsetLeft + 35 && mario.offsetLeft + 40 > e.offsetLeft)
        &&(mario.offsetTop<e.offsetTop + 30 && mario.offsetTop+50 >e.offsetTop)){
             collide.play();
             gameover();
       
       }
           

        }
    },100);


    setTimeout(function stop(){

        clearInterval(timer);
        clearInterval(timers);
        e.style.visibility="hidden";
        x.style.visibility="hidden";
        theme.pause();
        come.play();
        

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
    
        
       
        if(event.key===" "){
            mario.style.height="100px";
            jumped.play();

            
            if(flag==1){
                mario.style.backgroundImage='url(images/mario1.png)';

            }
            if(flag==0){

                mario.style.backgroundImage='url(images/mario5.png)';

            }
            if(mario.offsetTop>=465){
                mario.style.bottom=200 + "px";
                
               

                setTimeout(function jump(){

                    mario.style.bottom="60px";
                    mario.style.left=(mario.offsetLeft + 20) +"px";
                    

                },500);
               

            }

           
        }
     })

    // -----------coin logic------------------------------- 
    f();
    setInterval(() => {
        f();
        c.style.bottom = Math.floor(Math.random() * 100 ) + 80;
        c.style.left = (Math.random()*1200 + 50) + "px";
        c.style.width="40px";
        c.style.height="40px";
        c.style.display="inline-block";
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
        if((c.offsetLeft>=mario.offsetLeft && c.offsetLeft <= mario.offsetLeft + 70)
        &&(c.offsetTop>=mario.offsetTop && c.offsetTop<=mario.offsetTop + 100)){
            c.style.display="none";
            coined.play();
            score=score+10;
            scr.innerHTML=score;
       }
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
    fire.style.visibility="visible";
    setInterval(function trigger(){
        fire.style.left = d.offsetLeft + "px";
        fire.style.top = (d.offsetTop + 10) + "px";
        
    
        var s = setInterval(() => {
    
                fire.style.left=(fire.offsetLeft-firespeed) + "px"; 
                if((mario.offsetLeft<fire.offsetLeft + 55 && mario.offsetLeft + 35>=fire.offsetLeft) 
                && (mario.offsetTop<fire.offsetTop+25 && mario.offsetTop + 70 >=fire.offsetTop)){
                    collide.play();
                    gameover();
                }
            if(fire.offsetLeft<=-60){
                
                clearInterval(s);
            }
            
        }, 20);
    
        
    
    },4000);
    
}, 60000);

function Drag(){

    setInterval(function dragonanimate(){

        var dragonn=['images/dragon2.png','images/dragon3.png','images/dragon4.png','images/dragon1.png'];
        if(h==4){
            h=0;
        }
        else{
            d.style.backgroundImage='url(' + dragonn[h] + ')';
            h++;
            if((mario.offsetLeft<d.offsetLeft + 100 && mario.offsetLeft + 53>=d.offsetLeft) 
            && (mario.offsetTop<d.offsetTop+120 && mario.offsetTop + 70 >=d.offsetTop)){
                collide.play();
                gameover();
            }
            if(d.offsetLeft>600 && n==0){
                d.style.left=(d.offsetLeft - dragonspeed) + "px";
            }
            if(d.offsetLeft==600){
               n=1;
            }
            if(n==1 && d.offsetLeft<window.innerWidth){
                d.style.left=(d.offsetLeft + dragonspeed) + "px";
            }
            if(d.offsetLeft>=(window.innerWidth-300)){
                n=0;
            }

            if(mario.offsetLeft >(window.innerWidth-50)){
                come.pause();
                won.play();
            }

        }
        


    },55);
}

function gameover(){
    
    over.style.visibility="visible";
    c.style.visibility="hidden";
    mario.style.visibility="hidden";
    sc.style.visibility="hidden";
    d.style.visibility="hidden";
    x.style.visibility="hidden";
    e.style.visibility="hidden";
    fire.style.visibility="hidden";
    scrr.innerHTML=score;
    scoree.style.visibility="visible";
    
    setTimeout(() => {

        location.reload();
        
    }, 2000);
   

}

if(score>120){
    speed=25;
    firespeed=15;
}
else if(score>130 && score<=200){
    firespeed=20;
}
else if(score>200){
    firespeed=25;
    dragonspeed=25;
}
    
}





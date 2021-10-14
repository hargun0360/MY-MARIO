function play() {

    var m=0;
    var x=document.getElementById('bird');
    x.style.bottom=((Math.random()*60 + 60)) + "px";
    
    setInterval(function enemy(){
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

    document.getElementById("playButton").style.visibility = "hidden";
    var i = 0;
    const pos = 20;
    var k = 0;
    var mario = document.getElementById('mario');
    var t=0;


    window.addEventListener('keydown', function (event) {
        if (event.key === "ArrowRight") {
             var img = ['images/mario2.png', 'images/mario3.png', 'images/mario4.png'];
            if (mario.offsetLeft < (window.innerWidth - 100)) {
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
        if (event.key === "ArrowLeft") {
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


            if(mario.offsetTop==465){
                mario.style.bottom=200 + "px";

                setTimeout(function jump(){

                    mario.style.bottom="60px";

                },300);
               

            }

        }
     })

     


    
}

var numberButtons=document.querySelectorAll(".drum").length;

 for(var i=0; i<numberButtons; i++){
   document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var audio=new Audio('sounds/tom-'+i+'.mp3')
    audio.play();
    });
        /*alert("I got clicked!")*/;

 }

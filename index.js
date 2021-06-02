var numberButtons=document.querySelectorAll(".drum").length;

 for(var i=0; i<numberButtons; i++){
   document.querySelectorAll(".drum")[i].addEventListener("click",function(){
     var click=this.innerHTML;
     makeSound(click);

    });}
    document.addEventListener("keypress",function(event){
      var letra=event.key;
      makeSound(letra);
      buttonAnimation(letra);

    });
    function makeSound(key){
      var audioDrum;
    switch(key){
      case "w":
        audioDrum=new Audio("sounds/tom-1.mp3");
        audioDrum.play();
        break;
      case "a":
        audioDrum=new Audio("sounds/tom-2.mp3");
        audioDrum.play();
        break;
      case "s":
        audioDrum=new Audio("sounds/tom-3.mp3");
        audioDrum.play();
        break;
      case "d":
        audioDrum=new Audio("sounds/tom-4.mp3");
        audioDrum.play();
        break;
      case "j":
        audioDrum=new Audio("sounds/snare.mp3");
        audioDrum.play();
        break;
      case "k":
        audioDrum=new Audio("sounds/crash.mp3");
        audioDrum.play();
        break;
      case "l":
        audioDrum=new Audio("sounds/kick-bass.mp3");
        audioDrum.play();
        break;
        default:alert(this.innerHTML);
    }
  }
  function buttonAnimation(key){
    var button=document.querySelector("."+key);
    button.classList.add("pressed");
    setTimeout(function(){
      button.classList.remove("pressed");
    },100);
  }

    
  
 

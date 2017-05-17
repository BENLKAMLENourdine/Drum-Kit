function playSound(e){
    const key = e.keyCode;
   const audio = document.querySelector(`audio[data-key="${key}"]`);
    const elem = document.querySelector(`.key[data-key="${key}"]`);
    if(audio == null) return;
    audio.currentTime=0;
    audio.play();
    elem.classList.add("playing");
    /*setTimeout(function(){
        elem.classList.remove("playing");
    },70);*/
    
}

function removeTransition(e){
      if(e.propertyName !== "transform") return;
       this.classList.remove("playing");

    
}


document.addEventListener("keydown",playSound);
const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend",removeTransition));
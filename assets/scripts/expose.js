// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  var curHorn = document.getElementById("horn-select");
  var curHornImage = document.querySelector('img[alt="No image selected"]');
  var curHornSound = document.getElementsByClassName("hidden");
  var soundButton = document.querySelector('button');
  var curVolume = document.getElementById('volume');
  var curVolumeImage = document.querySelector('img[alt="Volume level 2"]');
  const confetti = new JSConfetti();

  curHorn.addEventListener('input', function() {
    let horn = curHorn.value;
    curHornImage.src = "./assets/images/"+horn+".svg";
    curHornSound[0].src = "./assets/audio/"+horn+".mp3";
  });

  soundButton.addEventListener('click', function() {
    curHornSound[0].play();
    if(curHorn.value=="air-horn") {
      confetti.addConfetti();
    }
  });

  curVolume.addEventListener('input', function() {
    let vol = curVolume.value;
    curHornSound[0].volume = vol/100;
    if(vol==0) {
      curVolumeImage.src = "./assets/icons/volume-level-0.svg";
    }
    else if (vol < 33) {
      curVolumeImage.src = "./assets/icons/volume-level-1.svg";
    } 
    else if (vol < 67) {
      curVolumeImage.src = "./assets/icons/volume-level-2.svg";
    }
    else {
      curVolumeImage.src = "./assets/icons/volume-level-3.svg";
    }
  });
}
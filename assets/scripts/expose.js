// expose.js

window.addEventListener('DOMContentLoaded', init);

var airhorn, carhorn, partyhorn, noimage;
var airAudio, carAudio, partyAudio;
var volume0, volume1, volume2, volume3;

function init() {
  airhorn = './assets/images/air-horn.svg';
  carhorn = './assets/images/car-horn.svg';
  partyhorn = './assets/images/party-horn.svg';
  airAudio = './assets/audio/air-horn.mp3';
  carAudio = './assets/audio/car-horn.mp3';
  partyAudio = './assets/audio/party-horn.mp3';
  volume0 = './assets/icons/volume-level-0.svg';
  volume1 = './assets/icons/volume-level-1.svg';
  volume2 = './assets/icons/volume-level-2.svg';
  volume3 = './assets/icons/volume-level-3.svg';
}

const selectElement = document.querySelector('#horn-select');
const image = document.querySelectorAll("img");
const audio = document.querySelector('audio');
selectElement.addEventListener('change', function() {
  if (selectElement.value == "air-horn"){
    image[0].src = airhorn;
    image[0].alt = "Air Horn selected";
    audio.src = airAudio;
  }
  else if (selectElement.value == "car-horn"){
    image[0].src = carhorn;
    image[0].alt = "Car Horn selected";
    audio.src = carAudio;
  }
  else {
    image[0].src = partyhorn;
    image[0].alt = "Party Horn selected";
    audio.src = partyAudio;
  }
}); 

const volumeSlider = document.querySelector('#volume');
volumeSlider.addEventListener('input', function() {
  if (volumeSlider.value == 0) {
    image[1].src = volume0;
    image[1].alt = "Volume level 0";
  }
  else if (volumeSlider.value < 33){
    image[1].src = volume1;
    image[1].alt = "Volume level 1";
  }
  else if (volumeSlider.value < 67){
    image[1].src = volume2;
    image[1].alt = "Volume level 2";
  }
  else {
    image[1].src = volume3;
    image[1].alt = "Volume level 3";
  }
});

const clickButton = document.querySelector('button');
const jsConfetti = new JSConfetti();
clickButton.addEventListener('click', function() {
  if (selectElement.value == 'party-horn'){
    jsConfetti.addConfetti();
  }
  audio.volume = volumeSlider.value/100;
  audio.play();
});
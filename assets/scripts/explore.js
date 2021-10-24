// explore.js

window.addEventListener('DOMContentLoaded', init);

var inputTxt, voiceSelect, voices, option;
var smiling, smilingOpen;
var updateImage;

function init() {
  inputTxt = document.querySelector('#text-to-speak');
  voiceSelect = document.querySelector('#voice-select');
  populateVoiceList();
  voices = [];
  option = document.createElement('option');
  smiling = './assets/images/smiling.png';
  smilingOpen = './assets/images/smiling-open.png';
}

function populateVoiceList() {
  voices = speechSynthesis.getVoices();

  for(var i = 0; i < voices.length ; i++) {
    var option = document.createElement('option');
    option.textContent = voices[i].name + ' (' + voices[i].lang + ')';

    if(voices[i].default) {
      option.textContent += ' -- DEFAULT';
    }

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    voiceSelect.appendChild(option);
  }
}

const image = document.querySelector('img');
const clickButton = document.querySelector('button');
clickButton.addEventListener('click', function() {
  var utterThis = new SpeechSynthesisUtterance(inputTxt.value);
  var selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
  voices = speechSynthesis.getVoices();
  for(var i = 0; i < voices.length ; i++) {
    if(voices[i].name === selectedOption) {
      utterThis.voice = voices[i];
    }
  }
  image.src = smilingOpen;
  speechSynthesis.speak(utterThis);
  updateImage = setInterval(updateImg, 100);
});

function updateImg() {
  console.log(speechSynthesis.speaking);
  if (!speechSynthesis.speaking) {
    image.src = smiling;
    clearInterval(updateImage);
  }
}
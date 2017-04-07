var clapsound = new Audio('clap.wav');
    
function clapMeme() {
  var checked = $(".caps").prop('checked');
  var spaceChecked = $(".space").prop('checked');
  var original = $('.meme').val().split('');
  var newMeme = original.map(function(value) {
    if(value === ' '){
      return (' \uD83D\uDC4F ');
    }else{
      return checked ? value.toUpperCase() : value
    }
  });

  newMeme.unshift('\uD83D\uDC4F ');
  newMeme.push('\uD83D\uDC4F');

  document.querySelector('.memeSection').innerText = newMeme.join('');
  copyMeme(newMeme.join(''))
  clapsay(original.join(''));
};

function copyMeme(meme) {
  document.querySelector('.hiddenMeme').value = meme;
  document.querySelector('.hiddenMeme').select();
  document.execCommand("Copy");
}

function clapsay(text) {
  var msg = new SpeechSynthesisUtterance();
  var voices = window.speechSynthesis.getVoices();
  msg.voice = voices[10]; // Note: some voices don't support altering params
  msg.voiceURI = 'native';
  msg.volume = 1; // 0 to 1
  msg.rate = 1; // 0.1 to 10
  msg.pitch = 1; //0 to 2
  msg.text = text;
  msg.lang = 'en-US';

  msg.onend = function(event) {
    console.log('Finished in ' + event.elapsedTime + ' seconds.');
  };
  
  msg.onboundary = function(event) {
    console.log('boundary');
    clapsound.play();
  }
  
  speechSynthesis.speak(msg);
}

$(document).ready(function(){
  document.querySelector('.memeStr').addEventListener('click', clapMeme);
  document.querySelector('.meme').addEventListener('keydown', function(e) {
    if (e.key === "Enter") { clapMeme(); }
  });;
}); 


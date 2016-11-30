$(document).ready(function(){
  var $memeSection = $("<div class='memeSection'></div>");
  $memeSection.appendTo('body');



  $(document.body).on('click', '.memeStr', function() {
  	var checked = $(".caps").prop('checked');
  	var spaceChecked = $(".space").prop('checked');
    var original = $('.meme').val().split('');
    var newMeme = original.map(function(value) {
      if(value === ' '){
        return ('\uD83D\uDC4F');
      }else{
      	if(checked){
      	  return value.toUpperCase();
      	}else{
      	  return value;
      	}
      }
    });

    $(".memeSection").html(newMeme.join(''));

    var clapsound = new Audio('clap.wav');
    
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
    clapsay(newMeme.join(''));
    });
});


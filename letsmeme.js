$(document).ready(function(){
  var $memeSection = $("<div class='memeSection'></div>");
  $memeSection.appendTo('body');

  $(document.body).on('click', '.memeStr', function() {
    var original = $('.meme').val().split('');
    var newMeme = original.map(function(value) {
      if(value === ' '){
        return ('\uD83D\uDC4F');
      }else{
        return value;
      }
    });
    $(".memeSection").html(newMeme.join(''));
  });
});
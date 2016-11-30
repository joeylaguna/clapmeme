$(document).ready(function(){
  var $memeSection = $("<div class='memeSection'></div>");
  $memeSection.appendTo('body'); 

  $(document.body).on('click','.memeStr',function(){
    var original = $('.meme').val();
    var arr = original.split('');
    var newMeme = [];
    arr.forEach(function(value){
      if(value===' '){
        newMeme.push(' \uD83D\uDC4F ');
      }else{
      	newMeme.push(value);
      }
    });
    $(".memeSection").html(newMeme.join(''));
  });
});

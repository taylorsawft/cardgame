$(document).ready(function(){
  $('.button').on('mousedown', function(){

    var changeCard = function(){
      if($('.computer').hasClass('two')){
        $('.computer').removeClass('two');
      } else if ($('.computer').hasClass('three')){
        $('.computer').removeClass('three');
      } else if ($('.computer').hasClass('four')){
        $('.computer').removeClass('four');
      } else if($('.computer').hasClass('five')){
        $('.computer').removeClass('five');
      } else if($('.computer').hasClass('six')){
        $('.computer').removeClass('six');
      } else if($('.computer').hasClass('seven')){
        $('.computer').removeClass('seven');
      } else if($('.computer').hasClass('eight')){
        $('.computer').removeClass('eight');
      } else if($('.computer').hasClass('nine')){
        $('.computer').removeClass('nine');
      } else if($('.computer').hasClass('ten')){
        $('.computer').removeClass('ten');
      } else if($('.computer').hasClass('jack')){
        $('.computer').removeClass('jack');
      } else if($('.computer').hasClass('queen')){
        $('.computer').removeClass('queen');
      } else if($('.computer').hasClass('king')){
        $('.computer').removeClass('king');
      } else {
        $('.computer').removeClass('default');}

    if($('.user').hasClass('two')){
      $('.user').removeClass('two');
    } else if ($('.user').hasClass('three')){
      $('.user').removeClass('three');
    } else if ($('.user').hasClass('four')){
      $('.user').removeClass('four');
    } else if($('.user').hasClass('five')){
      $('.user').removeClass('five');
    } else if($('.user').hasClass('six')){
      $('.user').removeClass('six');
    } else if($('.user').hasClass('seven')){
      $('.user').removeClass('seven');
    } else if($('.user').hasClass('eight')){
      $('.user').removeClass('eight');
    } else if($('.user').hasClass('nine')){
      $('.user').removeClass('nine');
    } else if($('.user').hasClass('ten')){
      $('.user').removeClass('ten');
    } else if($('.user').hasClass('jack')){
      $('.user').removeClass('jack');
    } else if($('.user').hasClass('queen')){
      $('.user').removeClass('queen');
    } else if($('.user').hasClass('king')){
      $('.user').removeClass('king');
    } else {
      $('.user').removeClass('default');}
  }
    changeCard();

    $('#output').remove();

  }).on('mouseup', function(){

    var cardNumber1 = Math.floor(Math.random() * 14); //computer
    var cardNumber2 = Math.floor(Math.random() * 14); //user

    console.log(cardNumber1 + " vs. " + cardNumber2);

    var draw = function(){
      if(cardNumber1 > cardNumber2){
        return("Computer wins!");}
      else if(cardNumber2 > cardNumber1){
        return("User wins!");}
      else{
      return("A draw...");}};

    var winner = draw();

    $('.spacer').append('<div id="output">' + winner + '</div>');

    var cardFace = function(){
      /*computer card*/
      if(cardNumber1 === 2){
        $('.computer').addClass('two');
      } else if (cardNumber1 === 3){
        $('.computer').addClass('three');
      } else if (cardNumber1 === 4){
        $('.computer').addClass('four');
      } else if(cardNumber1 === 5){
        $('.computer').addClass('five');
      } else if(cardNumber1 === 6){
        $('.computer').addClass('six');
      } else if(cardNumber1 === 7){
        $('.computer').addClass('seven');
      } else if(cardNumber1 === 8){
        $('.computer').addClass('eight');
      } else if(cardNumber1 === 9){
        $('.computer').addClass('nine');
      } else if(cardNumber1 === 10){
        $('.computer').addClass('ten');
      } else if(cardNumber1 === 11){
        $('.computer').addClass('jack');
      } else if(cardNumber1 === 12){
        $('.computer').addClass('queen');
      } else if(cardNumber1 === 13){
        $('.computer').addClass('king');
      } else{
        $('.computer').addClass('default');
      }

      /*user card*/
      if(cardNumber2 === 2){
        $('.user').addClass('two');
      } else if (cardNumber2 === 3){
        $('.user').addClass('three');
      } else if (cardNumber2 === 4){
        $('.user').addClass('four');
      } else if(cardNumber2 === 5){
        $('.user').addClass('five');
      } else if(cardNumber2 === 6){
        $('.user').addClass('six');
      } else if(cardNumber2 === 7){
        $('.user').addClass('seven');
      } else if(cardNumber2 === 8){
        $('.user').addClass('eight');
      } else if(cardNumber2 === 9){
        $('.user').addClass('nine');
      } else if(cardNumber2 === 10){
        $('.user').addClass('ten');
      } else if(cardNumber2 === 11){
        $('.user').addClass('jack');
      } else if(cardNumber2 === 12){
        $('.user').addClass('queen');
      } else if(cardNumber2 === 13){
        $('.user').addClass('king');
      } else{
        $('.user').addClass('default');
      }
    };
    $('.card').toggleClass('back', 10000, 'swing');
    cardFace();
})
});

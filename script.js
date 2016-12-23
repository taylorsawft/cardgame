$(document).ready(function(){
  $('.button').on('click', function(){
    var cardNumber1 = Math.floor(Math.random() * 14);
    var cardNumber2 = Math.floor(Math.random() * 14);
    $('.card').toggleClass("back");
    console.log(cardNumber1, cardNumber2);
  });
});


/*  $('.card').click(function()
{
    $(this).hide();
})
});*/

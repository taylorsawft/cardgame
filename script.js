$(document).ready(function(){
  $('.button').on('click', function(){
    var cardNumber = Math.floor(Math.random() * 14);
    console.log(cardNumber);
    $('.card').toggleClass("back");
  });
});


/*  $('.card').click(function()
{
    $(this).hide();
})
});*/

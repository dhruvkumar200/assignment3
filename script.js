$(document).ready(function(){
  $('.btn').on('click', function() {
    $('.modelbox').show();
    $('.close').on('click',function(){
      $('.modelbox').hide();

    })

});
   
  });

  window.onscroll = function() {myFunction()};
  var header=document.getElementById("myheader");
  var sticky=header.offsetTop;

  function myFunction(){
    if(window.pageYOffset>sticky) {
      header.classList.add("sticky");

    } else{
      header.classList.remove("sticky");
    }
  }
console.log('\'Allo \'Allo!');
var year = (new Date).getFullYear();

$(document).ready(function () {
    $('#year').text(year);


    $('.menu-movil').click(function(){
        $('.hamburger').toggleClass('is-active');
        $('.navbar-menu').toggleClass('is-active');
    });
    $('.navbar-item').click(function () {
        $('.hamburger').toggleClass('is-active');
        $('.navbar-menu').toggleClass('is-active');
    });

    var URLdomain = window.location.host;
    console.log('//'+URLdomain+'/php/send_mail.php');

$('#form').on('submit',function(e) {  //Don't foget to change the id form
 if(grecaptcha.getResponse() == '') {
  swal('', 'Please, check the verification box.', 'error');


  
     //This is to Avoid Page Refresh and Fire the Event "Click"
   }else{
    $.ajax({
      url:'//'+URLdomain+'/php/send_mail.php', //===PHP file name====
      data:$(this).serialize(),
      type:'POST',
      success:function(data){
        console.log(data);
        //Success Message == 'Title', 'Message body', Last one leave as it is
      swal('', 'Your message was sent, thank you for contacting us, we will respond shortly.', 'success');
          document.getElementById('form').reset();
          
          
      },
      error:function(data){
        //Error Message == 'Title', 'Message body', Last one leave as it is
       swal('', 'Ops. Message NOT Sent', 'error');
      }
    });  
    
   }
   grecaptcha.reset();

   e.preventDefault();
  });

 

    


    $('a[href*=#]').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({ scrollTop: targetOffset }, 2000);
                return false;
            }
        }
    });


    $('.navbar a').click(function () {
        $('.navbar-end a.is-link-active').removeClass('is-link-active');
        $(this).addClass('is-link-active');
    });

    var navbar = $('.navbar').height();

    $(window).scroll(function () {
        var href = $(this).scrollTop();

        $('.navbar-item').each(function (event) {
          
            if (href >= $($(this).attr('href')).offset().top - navbar *2) {
                $('.navbar a.is-link-active').removeClass('is-link-active');
                $(this).addClass('is-link-active');
            }
          

        });
    });

   

   

});
$(function(){   

//start
    
　setTimeout(function(){
     $('.title').fadeIn(100);
   $('.title').addClass('active-title'); 
},300); 
     
    
　setTimeout(function(){
     var w = $('html').width();
     if (w > 500) {
      $('.header-nav').fadeIn(100);
   $('.header-nav').addClass('active-title');        
     }
},500); 
    
//fixed-header    
  $(window).on('load scroll', function(){

    if ($(window).scrollTop() > 500) {
      $('.fixed-header').fadeIn(400);       
    } else if($(window).scrollTop() < 500){
      $('.fixed-header').fadeOut(400);  
    }
  });
    
//fadeIn
    $(window).on('load scroll',function(){
       
        if ($(window).scrollTop() > 300) {
            $('.work1').fadeIn(400);
            $('.work1').addClass('active1');
        
        }
    });
    
    $(window).on('load scroll',function(){
       
        if ($(window).scrollTop() > 300) {
            $('.work2').fadeIn(400);
            $('.work2').addClass('active2');
        }
    });
    
    $(window).on('load scroll',function(){
       
        if ($(window).scrollTop() > 550) {
            $('.work3').fadeIn(400);
            $('.work3').addClass('active3');
        }
    });
    
    $(window).on('load scroll',function(){
       
        if ($(window).scrollTop() > 550) {
            $('.work4').fadeIn(400);
            $('.work4').addClass('active4');
        }
    });
    
//fadeIn
    $(window).on('load scroll',function(){
       
        if ($(window).scrollTop() > 2400) {
            $('.card1').fadeIn(400);
            $('.card1').addClass('active5');
        
        }
    });
    
    $(window).on('load scroll',function(){
       
        if ($(window).scrollTop() > 2400) {
            $('.card2').fadeIn(400);
            $('.card2').addClass('active6');
        }
    });
    
    $(window).on('load scroll',function(){
       
        if ($(window).scrollTop() > 2400) {
            $('.card3').fadeIn(400);
            $('.card3').addClass('active7');
        }
    });
    
    $(window).on('load scroll',function(){
       
        if ($(window).scrollTop() > 2400) {
            $('.card4').fadeIn(400);
            $('.card4').addClass('active8');
        }
    });    
  
//scroll 
  $('.home-btn').click(function(){
      event.preventDefault();
    $("html,body").animate({scrollTop:$('#home').offset().top - 50}, { duration: 'slow', easing: 'swing', });  
  });     
    
  $('.works-btn').click(function(){
      event.preventDefault();
    $("html,body").animate({scrollTop:$('#works').offset().top - 50}, { duration: 'slow', easing: 'swing', });  
  }); 

    
  $('.about-btn').click(function(){
      event.preventDefault();
    $("html,body").animate({scrollTop:$('#about').offset().top - 50}, { duration: 'slow', easing: 'swing', });  
  }); 
    
  $('.skill-btn').click(function(){
      event.preventDefault();
    $("html,body").animate({scrollTop:$('#skill').offset().top - 50}, { duration: 'slow', easing: 'swing', });  
  }); 
    
  $('.contact-btn').click(function(){
      event.preventDefault();
    $("html,body").animate({scrollTop:$('#contact').offset().top - 50}, { duration: 'slow', easing: 'swing', });  
  }); 

//works-modal   

$('.work-btn1').click(function(){
        winnScrollTop = $(window).scrollTop();
           var target = $(this).data('target');
           var modal = document.getElementById(target); 
   $('.modal-ABC').fadeIn('slow');
    $('html').css('overflow-y','hidden');
    return false;
});
    
$('.modal-close').click(function(){
    $('.modal-ABC').fadeOut();
    $('html').css('overflow-y','auto');
    return false;   
}); 

$('.work-btn2').click(function(){
        winnScrollTop = $(window).scrollTop();
           var target = $(this).data('target');
           var modal = document.getElementById(target); 
   $('.modal-hare').fadeIn('slow'); 
    $('html').css('overflow-y','hidden');
    return false;
});
    
$('.modal-close').click(function(){
    $('.modal-hare').fadeOut(); 
    $('html').css('overflow-y','auto');
    return false;   
});
    
$('.work-btn3').click(function(){
        winnScrollTop = $(window).scrollTop();
           var target = $(this).data('target');
           var modal = document.getElementById(target); 
   $('.modal-Airbnb').fadeIn('slow');
    $('html').css('overflow-y','hidden');
    return false;
});
    
$('.modal-close').click(function(){
    $('.modal-Airbnb').fadeOut();
    $('html').css('overflow-y','auto');
    return false;   
});
    
$('.work-btn4').click(function(){
        winnScrollTop = $(window).scrollTop();
           var target = $(this).data('target');
           var modal = document.getElementById(target); 
   $('.modal-paspol').fadeIn('slow'); 
    $('html').css('overflow-y','hidden');
    return false;
});
    
$('.modal-close').click(function(){
    $('.modal-paspol').fadeOut();
    $('html').css('overflow-y','auto');
    return false;   
});    
    
    
    

//music-modal
    
$('.music-modal-one').click(function(){
        winnScrollTop = $(window).scrollTop();
           var target = $(this).data('target');
           var modal = document.getElementById(target); 
   $('.modal-one').fadeIn();
    $( "#yamanosachi" ).attr( 'src','https://www.youtube.com/embed/h4Ycq5H2MVQ' );
    $('html').css('overflow-y','hidden');
    return false;
});
    
$('.modal-close').click(function(){
    $('.modal-one').fadeOut(); 
    $('html').css('overflow-y','auto');
    $( '#yamanosachi').removeAttr( "src" );
    return false;   
}); 
    
$('.music-modal-two').click(function(){
        winnScrollTop = $(window).scrollTop();
           var target = $(this).data('target');
           var modal = document.getElementById(target); 
   $('.modal-two').fadeIn();
    $( '#tyuka' ).attr( 'src','https://www.youtube.com/embed/kC8m6-09jtM' );
    $('html').css('overflow-y','hidden');
    return false;
});    
    
$('.modal-close').click(function(){
    $('.modal-two').fadeOut(); 
    $('html').css('overflow-y','auto');
    return false;   
}); 
    
$('.music-modal-three').click(function(){
        winnScrollTop = $(window).scrollTop();
           var target = $(this).data('target');
           var modal = document.getElementById(target); 
   $('.modal-three').fadeIn(); 
    $( '#echo' ).attr( 'src','https://www.youtube.com/embed/4tryrRmC0Mk' );
    $('html').css('overflow-y','hidden');
    return false;
});
    
$('.modal-close').click(function(){
    $('.modal-three').fadeOut();
    $( '#echo').removeAttr( "src" );
    $('html').css('overflow-y','auto');
    return false;   
});    
    
$('.music-modal-four').click(function(){
        winnScrollTop = $(window).scrollTop();
           var target = $(this).data('target');
           var modal = document.getElementById(target); 
   $('.modal-four').fadeIn();
    $( '#m' ).attr( 'src','https://www.youtube.com/embed/71STim5VKt4' );
    $('html').css('overflow-y','hidden');
    return false;
});    
    
$('.modal-close').click(function(){
    $('.modal-four').fadeOut();
    $( '#m').removeAttr( "src" );
    $('html').css('overflow-y','auto');
    return false;   
});    
    
    
    
  
   //copy-btn 
   $('#js-copybtn').hover(function(){
      $('#text-copy').text("copy");
      $('#text-copy').fadeIn();
   }, function(){
       
       $('#text-copy').hide();
   
   });


   // コピーテキストボタンを実装

    $('#js-copybtn').click(function() {
        
	var range = document.createRange();
	var element = document.getElementById('target');
	range.selectNodeContents(element);
	
	var selection = window.getSelection();
	selection.removeAllRanges();
	selection.addRange(range);
        
    document.execCommand('copy');
        
        $('#text-copy').text("copied");
        $('#text-copy').show();
        $('#text-copy').fadeOut(600);
    });


$('.mobile-fixed-header').click(function(){
    $('.mobile-slide').slideToggle();
});
    
    
});

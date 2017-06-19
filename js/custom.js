$( document ).ready(function() {
   // alert( "ready!" );
   //PRELOAD
	setTimeout(function(){
		$("#status").fadeOut("slow"); 
		$("#loader").delay(100).fadeOut(); 
		$("body").removeClass("stack"); 
	}, 5000);
	// TIME
	var intervals = setInterval(function() {
        var momentNow = new Date().toLocaleString();
        $('.time-part').html(momentNow);
    }, 100);
	
	

	function getPageName() {
	    var index = window.location.href.lastIndexOf("/") + 1,
	        filenameWithExtension = window.location.href.substr(index),
	        filename = filenameWithExtension.split(".")[0];  
	   //return filename;
	    //alert(filename); 
	    if(filename == 'index' || filename == ''){
	    	$('.aHome').addClass('active');
	    }
	    if(filename == 'mobile'){
	    	$('.aMobile').addClass('active');
	    }
	    if(filename == 'products'){
	    	$('.aProducts').addClass('active');
	    }
	    if(filename == 'promotion'){
	    	$('.aPromotion').addClass('active');
	    }
	    if(filename == 'commision'){
	    	$('.aCommision').addClass('active');
	    }
	    if(filename == 'faq'){
	    	$('.aFaq').addClass('active');
	    }
                     
	}
	getPageName();







	//login dropdown at header
	$(".login").on('click',function(e) {
		//alert('sssss');
		e.preventDefault();
	    e.stopPropagation();
		//$(".loginBody").hide();
		if($(this).next(".loginBody:first").is(":hidden")) {
			$(this).next(".loginBody:first").slideToggle('fast');
		}
		else {
			$(this).next(".loginBody:first").slideToggle('fast');
		}
	});
	// DISMISSING LOGIN TOGGLE
	$(document).on('click',function(e){
     if($('.loginBody').is(':visible')) {
            $('.loginBody').slideToggle('fast');
        }
    });
	$('.loginBody').on('click', function(e){
        if($(this).is(':visible'))
            e.stopPropagation();
    });
	
	/*$(window).scroll(function() {
		if ($(this).scrollTop() > 1){  
			$('.header').addClass("sticky");
		}
		else{
			$('.header').removeClass("sticky");
		}
	});*/
	
	
	
	//BUTTON HOW IT WORKS 
	$(".how-it-works").mouseover(function(){
		$("#hiwCont").stop().animate({left: '0px'});
	});
	$(".how-it-works").mouseleave(function(){
		$("#hiwCont").stop().animate({left: '-250px'});
	});
	
	//BUTTON CONTACT US 
	$(".contact-us").mouseover(function(){
		$("#cuCont").stop().animate({right: '0px'});
	});
	$(".contact-us").mouseleave(function(){
		$("#cuCont").stop().animate({right: '-250px'});
	});


	
});
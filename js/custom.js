$( document ).ready(function() {
   // alert( "ready!" );
	
	setTimeout(function(){
		$("#status").fadeOut("slow"); 
		$("#loader").delay(100).fadeOut(); 
		$("body").removeClass("stack"); 
	}, 1500);

	
	// TIME
	var intervals = setInterval(function() {
        var momentNow = new Date().toLocaleString();
        $('.time-part').html(momentNow);
    }, 100);
	
	
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
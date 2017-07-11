$( document ).ready(function() {
   // alert( "ready!" );
   
   // GETTING RANDOM ALPHANUMERIC TRACKING CODE
   /*$('.trackName').on('click', function(){
		//alert(Math.random().toString(36).substr(2, 5));
		var track = $('#trackName').val().length; 
		if(track == '1') {
			var Rand = Math.random().toString(36).substr(2, 7);
		}
		else if(track == '2') {
			var Rand = Math.random().toString(36).substr(2, 6);
		}
		else if(track == '3') {
			var Rand = Math.random().toString(36).substr(2, 5);
		}
		else if(track == '4') {
			var Rand = Math.random().toString(36).substr(2, 4);
		}
		else if(track == '5') {
			var Rand = Math.random().toString(36).substr(2, 3);
		}
		else if(track == '6') {
			var Rand = Math.random().toString(36).substr(2, 2);
		}
		else if(track == '7') {
			var Rand = Math.random().toString(36).substr(2, 1);
		}
		else if(track == '8') {
			var Rand = '';
		}
		else {
			var Rand = Math.random().toString(36).substr(2, 8);
		}
		$('#trackName').val($('#trackName').val()+Rand);
		
	});*/

	

   
//PRELOAD
setTimeout(function(){
	$("#status").fadeOut("slow");
	$("#loader").delay(100).fadeOut();
	$("body").removeClass("stack");
}, 500);
// TIME
function getPageName() {
    var index = window.location.href.lastIndexOf("/") + 1,
        filenameWithExtension = window.location.href.substr(index),
        filename = filenameWithExtension.split(".")[0];  
   //return filename;
    //alert(filename); 
    if(filename == 'index' || filename == ''){
    	$('.pHome').addClass('selected');
    }
    if(filename == 'monthly-overview' || filename == 'overall-commision'){
    	$('.pOverview').addClass('selected');
    }
    if(filename == 'creative'){
    	$('.pCreative').addClass('selected');
    }
    if(filename == 'tracking'){
    	$('.pTracking').addClass('selected');
    }
    if(filename == 'reports' || filename == 'company' || filename == 'payment-reports' || filename == 'member-report' || filename == 'company-products' || filename == 'company-members'){
    	$('.pReports').addClass('selected');
    }                      
}
getPageName();
var intervals = setInterval(function() {
  var momentNow = new Date().toLocaleString();
  $('.time-part').html(momentNow);
}, 100);


$('.pOverview').mouseover(function(){
	$('subMenu').show();
});





 $('#submitTrack').on('click',function(){
   $('.tblCreativeGrid').show('slow');
 });


$('.rightControl').load('accounts/private-message.html');
$('.leftControl ul li a').on('click',function(e){
e.preventDefault();
//alert('sssssssss');
$('.leftControl ul li').removeClass('active');
var $parent = $(this).parent();
    if (!$parent.hasClass('active')) {
        $parent.addClass('active');
  }
  if($('.leftControl ul li.account').hasClass('active')){
    $('.rightControl').load('accounts/myaccount.html');
  }
  if($('.leftControl ul li.bankAccount').hasClass('active')){
    $('.rightControl').load('accounts/mybankaccount.html');
  }
  if($('.leftControl ul li.cpassword').hasClass('active')){
    $('.rightControl').load('accounts/change-password.html');
  }
  if($('.leftControl ul li.pmsg').hasClass('active')){
    $('.rightControl').load('accounts/private-message.html');
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



	$("#crativeSubmit").on('click',function(){
    	var tracks = $('#trackName').val();
    	var url = document.location.origin + "/afterlogin/";
    	var path = "images/promotion";
    	var fileExt = ".gif";
		
    	var lang = $('#lang option:selected').val();
    	var wh = $('#wh option:selected').val();
		var whPath = $('#wh option:selected').text();
		var promo = $('#promotion option:selected').val();
		var promoPath = $('#promotion option:selected').text().replace(/ /g,"_").toLowerCase();
		var group = $('#group option:selected').val();

		if(lang == '' || wh == '' || promo == '' || group == '' || tracks =='') {
			$(".notif").html("Please complete all details").slideDown('fast');	
			setTimeout("$('.notif').slideUp('slow')",'2500');
		}
		else {
			var imgPath = path + "/" + promoPath + "/" + lang + "/" + whPath + fileExt;
			$('.prevImg img').prop('src', imgPath);
			$('.preview').show();	
	    	$('.tid').html($('#trackName').val());
	    	if(group == '2') {
	    		$(".anchorImg").attr("href", "https://affiliate.fb88.com/Account/Register/Track.aspx?affiliateid=1688&lang=en-us&tid=" + tracks);
	    		$("#copy1").attr("href", "https://affiliate.fb88.com/Account/Register/Track.aspx?affiliateid=1688&lang=en-us&tid=" + tracks);
	    		$("#copy1").text("<a href='https://affiliate.fb88.com/Account/Register/Track.aspx?affiliateid=1688&lang=en-us&tid="+ tracks + "' target='_blank'>" + "<img src='"+ url + imgPath +"'></a>");
	    	}
	    	if(group == '1'){
	    		$(".anchorImg").attr("href", "https://affiliate.fb88.com/Track.aspx?affiliateid=1688&lang=en-us&tid=" + tracks);
	    		$("#copy1").attr("href", "https://affiliate.fb88.com/Track.aspx?affiliateid=1688&lang=en-us&tid=" + tracks);
	    		$("#copy1").text("<a href='https://affiliate.fb88.com/Track.aspx?affiliateid=1688&lang=en-us&tid="+ tracks + "' target='_blank'>" + "<img src='"+ url + imgPath +"'></a>");
	    	}
		}


    });


	$( function() {


		$( "#expenseModal" ).dialog({
			autoOpen: false,
			modal: true,
			closeOnEscape: true,
			width: 600,
			open: function(){
            jQuery('.ui-widget-overlay').bind('click',function(){
                jQuery('#expenseModal').dialog('close');
	            })
	        }
		});
		$( ".callExpense" ).on( "click", function(e) {
			e.preventDefault();
			$( "#expenseModal" ).dialog( "open" );
		});


		$( "#trackingModal" ).dialog({
			autoOpen: false,
			modal: true,
			closeOnEscape: true,
			width: 600,
			open: function(){
            jQuery('.ui-widget-overlay').bind('click',function(){
                jQuery('#trackingModal').dialog('close');
	            })
	        }
		});
		$( ".trackName" ).on( "click", function(e) {
			e.preventDefault();
			$( "#trackingModal" ).dialog( "open" );
		});


		$( "#mailOpenModal" ).dialog({
			autoOpen: false,
			modal: true,
			closeOnEscape: true,
			width: 600,
			open: function(){
            jQuery('.ui-widget-overlay').bind('click',function(){
                jQuery('#mailOpenModal').dialog('close');
	            })
	        }
		});
		$( ".mailOpen" ).on( "click", function(e) {
			e.preventDefault();
			$( "#mailOpenModal" ).dialog( "open" );	
		});
		
		$( "#composeModal" ).dialog({
			autoOpen: false,
			modal: true,
			closeOnEscape: true,
			width: 600,
			open: function(){
            jQuery('.ui-widget-overlay').bind('click',function(){
                jQuery('#composeModal').dialog('close');
	            })
	        }
		});
		$( ".openCompose" ).on( "click", function(e) {
			e.preventDefault();
			$( "#composeModal" ).dialog( "open" );	
		});
	});
	$('.overlay_sector').bind( 'click', function() {
        $("#trackingModal").dialog('close');
        $('.overlay_sector').unbind();
    } )
});

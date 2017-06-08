$( document ).ready(function() {
   // alert( "ready!" );
   
	//DATEPICKER
    $('#dob').datetimepicker({
          yearOffset:0,
          lang:'en',
          timepicker:false,
          format:'d/m/Y',
          formatDate:'Y/m/d',
	});

	$.fn.myCondition = function () {
		 if ($(this).val() === '') {
			$(this).css("border-color", "#ec0000");
			$('~ .okcheck', $(this)).hide();
			$('~ .okcross', $(this)).show();
		  } else {
			$(this).css("border-color", "#028843");
			$('~ .okcheck', $(this)).show();
			$('~ .okcross', $(this)).hide();
		  }
	}
	//fullname, when there is data
	$('#fullname').focusout(function() {
		 $(this).myCondition();
	});
	//when typing keyup
	$('#fullname').keyup(function(){
		 $(this).myCondition();
	});
	
	$('#dob').focusout(function() {
		  $(this).myCondition();
	});
	$('#phone2').focusout(function() {
		 $(this).myCondition();
	});
	$('#phone2').keyup(function(){
		 $(this).myCondition();
	});
	//stop character from entering input
	$('#phone2').keypress(function(event){
		return numberOnly(this, event)
   });
   $('#phone1').keypress(function(event){
		return numberOnly(this, event)
   });

	//Numbers
	function numberOnly(myfield, e, dec)
	{
	var key;
	var keychar;
	
	if (window.event)
	   key = window.event.keyCode;
	else if (e)
	   key = e.which;
	else
	   return true;
	keychar = String.fromCharCode(key);
	
	// control keys
	if ((key==null) || (key==0) || (key==8) || 
		(key==9) || (key==13) || (key==27) || (key==32))
	   return true;
	
	// numbers
	else if ((("1234567890").indexOf(keychar) > -1))
	   return true;
	
	// decimal point jump
	else if (dec && (keychar == "."))
	   {
	   myfield.form.elements[dec].focus();
	   return false;
	   }
	else
	   return false;
	}

	// when there is data
	$('#email').focusout(function() {
		var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
		if(pattern.test($("#email").val())) {
			$(this).css("border-color", "#028843");
			$('~ .okcheck', $(this)).hide();
			$('~ .okcross', $(this)).show();
		  } else {
			$(this).css("border-color", "#ec0000");
			$('~ .okcheck', $(this)).show();
			$('~ .okcross', $(this)).hide();
		  }
	});
	$('#email').keyup(function(){
		var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
		if(pattern.test($("#email").val())) {
			$(this).css("border-color", "#028843");
			$('~ .okcheck', $(this)).hide();
			$('~ .okcross', $(this)).show();
		  } else {
			$(this).css("border-color", "#ec0000");
			$('~ .okcheck', $(this)).show();
			$('~ .okcross', $(this)).hide();
		  }
	});
	
	$('#country').focusout(function() {
		$(this).myCondition();
	});
	
	$('#social1').focusout(function() {
		$(this).myCondition();
	});
	$('#social2').focusout(function() {
		$(this).myCondition();
	});
	$('#lang').focusout(function() {
		$(this).myCondition();
	});
	$('#currency').focusout(function() {
		$(this).myCondition();
	});
	
	$('#user').focusout(function() {
		$(this).myCondition();
	});
	$('#user').keyup(function(){
		if($(this).val().length > 8 ) {
			$(this).css("border-color", "#028843");
			$('~ .okcheck', $(this)).hide();
			$('~ .okcross', $(this)).show();
		  } else {
			$(this).css("border-color", "#ec0000");
			$('~ .okcheck', $(this)).show();
			$('~ .okcross', $(this)).hide();
		  }
	});
	
	
	
	$('#pass').focusout(function() {
		var pass = $('#result').val();
		if($('#result').hasClass('strong')) {
			$('~ .okcheck', $(this)).show();
			$('~ .okcross', $(this)).hide();
			$(this).css("border-color", "#028843");
		}else {
			$('~ .okcheck', $(this)).hide();
			$('~ .okcross', $(this)).show();
			$(this).css("border-color", "#ec0000");
		}
	});

	$('#pass').keyup(function()
	{
		$('#result').html(checkStrength($('#pass').val()));
	});

	function checkStrength(password)
	{
		var strength = 0

		if (password.length < 6) {
			$('#result').removeClass()
			$('#result').addClass('short')
			return 'Too short'
		}
		if (password.length > 7) strength += 1
		//If password contains both lower and uppercase characters, increase strength value.
		if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/))  strength += 1
		//If it has numbers and characters, increase strength value.
		if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/))  strength += 1
		//If it has one special character, increase strength value.
		if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/))  strength += 1
		//if it has two special characters, increase strength value.
		if (password.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1
		//Calculated strength value, we can return messages

		//If value is less than 2
		if (strength < 2 ) {
			$('#result').removeClass()
			$('.txtpass').addClass('weak')
			return 'Weak'
		}
		else if (strength == 8) {
			$('#result').removeClass()
			$('#result').addClass('good')
			return 'Good'
		}
		else {
			$('#result').removeClass()
			$('#result').addClass('strong')
			return 'Strong'
			
		}
	}
	
	$('#cpass').focusout(function() {
		var passwordkey = $("#pass").val();
		var retype_passwordkey = $("#cpass").val();
		if( retype_passwordkey == passwordkey ) {
			$(this).css("border-color", "#028843");
			$('~ .okcheck', $(this)).show();
			$('~ .okcross', $(this)).hide();
		  } else {
			$(this).css("border-color", "#ec0000");
			$('~ .okcheck', $(this)).hide();
			$('~ .okcross', $(this)).show();
		  }
	});

	$('#cpass').keyup(function(){
		var passwordkey = $("#pass").val();
		var retype_passwordkey = $("#cpass").val();
		if( retype_passwordkey == passwordkey ) {
			$(this).css("border-color", "#028843");
			$('~ .okcheck', $(this)).show();
			$('~ .okcross', $(this)).hide();
		  } else {
			$(this).css("border-color", "#ec0000");
			$('~ .okcheck', $(this)).hide();
			$('~ .okcross', $(this)).show();
		  }
	});

	
	
});
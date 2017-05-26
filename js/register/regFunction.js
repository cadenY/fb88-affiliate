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
	
	//fullname, when there is data
	$('#fullname').focusout(function() {
		var fname = $(this).val();
		if(fname != '') {
			$('.a.okcheck').show()
			$('.a.okcross').hide();
		}else {
			$('.a.okcross').show();
			$('.a.okcheck').hide();
			$(this).css("border-color", "#ec0000");
		}
	});
	//when typing keyup
	$('#fullname').keyup(function(){
		var fullname = $(this).val();
		if(fullname != '') {
			$(this).css("border-color", "#028843");
			$('.a.okcheck').show()
			$('.a.okcross').hide();
		}
		else {
			$(this).css("border-color", "#ec0000");
			$('.a.okcross').show();
			$('.a.okcheck').hide();
		}
	});
	
	$('#dob').focusout(function() {
		var dob = $(this).val();
		if(dob != '') {
			$('.b.okcheck').show();
			$('.b.okcross').hide();
			$(this).css("border-color", "#028843");
		}else {
			$('.b.okcross').show();
			$('.b.okcheck').hide()
			$(this).css("border-color", "#ec0000");
		}
	});
	
	
	
	$('#phone2').focusout(function() {
		var phone = $(this).val();
		if(phone != '') {
			$('.d.okcheck').show();
			$('.d.okcross').hide();
		}else {
			$('.d.okcross').show();
			$('.d.okcheck').hide();
		}
	});
	$('#phone2').keyup(function(){
		var pnum = new RegExp(/[0-9 -()+]+$/);
		if(pnum.test($("#phone").val())) {
			$(this).css("border-color", "#028843");
			$('.c.okcheck').show();
			$('.c.okcross').hide();
		} else {
			$(this).css("border-color", "#ec0000");
			$('.c.okcross').show();
			$('.c.okcheck').hide();
		}
	});
	
	
	
	
	
	
	
	
	// when there is data
	$('#email').focusout(function() {
		var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
		if(pattern.test($("#email").val())) {
			$(this).css("border-color", "#028843");
			$('.d.okcheck').show();
			$('.d.okcross').hide();
		} else {
			$(this).css("border-color", "#ec0000");
			$('.d.okcross').show();
			$('.d.okcheck').hide();

		}
	});
	$('#email').keyup(function(){
		var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
		if(pattern.test($("#email").val())) {
			$(this).css("border-color", "#028843");
			$('.d.okcheck').show();
			$('.d.okcross').hide();
		} else {
			$(this).css("border-color", "#ec0000");
			$('.d.okcross').show();
			$('.d.okcheck').hide();

		}
	});
	
	$('#country').focusout(function() {
		var cur = $(this).val();
		if(cur != '') {
			$('.e.okcheck').show();
			$('.e.okcross').hide();
		}else {
			$('.e.okcross').show();
			$('.e.okcheck').hide();
		}
	});
	
	$('#social1').focusout(function() {
		var cur = $(this).val();
		if(cur != '') {
			$('.f.okcheck').show();
			$('.f.okcross').hide();
		}else {
			$('.f.okcross').show();
			$('.f.okcheck').hide();
		}
	});
	$('#social2').focusout(function() {
		var cur = $(this).val();
		if(cur != '') {
			$('.g.okcheck').show();
			$('.g.okcross').hide();
		}else {
			$('.g.okcross').show();
			$('.g.okcheck').hide();
		}
	});
	$('#lang').focusout(function() {
		var cur = $(this).val();
		if(cur != '') {
			$('.h.okcheck').show();
			$('.h.okcross').hide();
		}else {
			$('.h.okcross').show();
			$('.h.okcheck').hide();
		}
	});
	$('#currency').focusout(function() {
		var cur = $(this).val();
		if(cur != '') {
			$('.i.okcheck').show();
			$('.i.okcross').hide();
		}else {
			$('.i.okcross').show();
			$('.i.okcheck').hide();
		}
	});
	
	
	$('#user').focusout(function() {
		var user = $(this).val();
		if(user != '') {
			$('.j.okcheck').show();
			$('.j.okcross').hide();
		}else {
			$('.j.okcross').show();
			$('.j.okcheck').hide();
			$(this).css("border-color", "#ec0000");
		}
	});
	$('#user').keyup(function(){
		if($(this).val().length > 8 ) {
			$(this).css("border-color", "#028843");
			$('.j.okcheck').show();
			$('.j.okcross').hide();
		}
		else {
			$(this).css("border-color", "#ec0000");
			$('.j.okcross').show();
			$('.j.okcheck').hide();
		}
	});
	
	
	
	$('#pass').focusout(function() {
		var pass = $('#result').val();
		if($('#result').hasClass('strong')) {
			$('.k.okcheck').show();
			$('.k.okcross').hide();
			$(this).css("border-color", "#028843");
		}else {
			$('.k.okcross').show();
			$('.k.okcheck').hide();
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
		var cpass = $(this).val();
		var pass = $('#pass').val();
		if(cpass == pass) {
			$('.l.okcheck').show();
			$('.l.okcross').hide();
			$(this).css("border-color", "#028843");
		}else {
			$('.l.okcross').show();
			$('.l.okcheck').hide();
			$(this).css("border-color", "#ec0000");
		}
	});

	$('#cpass').keyup(function(){
		var passwordkey = $("#pass").val();
		var retype_passwordkey = $("#cpass").val();

		if( retype_passwordkey == passwordkey ) {
			$('.l.okcheck').show();
			$('.l.okcross').hide();
			$(this).css("border-color", "#028843");
		} else {
			$(this).css("border-color", "#ec0000");
			$('.l.okcross').show();
			$('.l.okcheck').hide();
		}
	});
	
	
	$('#url').focusout(function() {
		var url = $(this).val();
		if(cpass != '') {
			$('.m.okcheck').show();
			$('.m.okcross').hide();
			$(this).css("border-color", "#028843");
		}else {
			$('.m.okcross').show();
			$('.m.okcheck').hide();
			$(this).css("border-color", "#ec0000");
		}
	});

	$('#url').keyup(function(){
		var url = $("#pass").val();
		if( url != '' ) {
			$('.m.okcheck').show();
			$('.m.okcross').hide();
			$(this).css("border-color", "#028843");
		} else {
			$(this).css("border-color", "#ec0000");
			$('.m.okcross').show();
			$('.m.okcheck').hide();
		}
	});
	
	$('#capt').focusout(function() {
		var url = $(this).val();
		if(url != '') {
			$('.n.okcheck').show();
			$('.n.okcross').hide();
			$(this).css("border-color", "#028843");
		}else {
			$('.n.okcross').show();
			$('.n.okcheck').hide();
			$(this).css("border-color", "#ec0000");
		}
	});

	$('#capt').keyup(function(){
		var capt = $("#pass").val();
		if( capt != '' ) {
			$('.n.okcheck').show();
			$('.n.okcross').hide();
			$(this).css("border-color", "#028843");
		} else {
			$(this).css("border-color", "#ec0000");
			$('.n.okcross').show();
			$('.n.okcheck').hide();
		}
	});
	
	
	
	
	
	
	
	
	
	
	
});
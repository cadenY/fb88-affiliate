$( document ).ready(function() {
  /* TOOLTIP */
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
  $('#contact').keyup(function(){
      $(this).myCondition();
  });
  $('#contact').keypress(function(event){
   return numberOnly(this, event);
  });
  $('#contact').focusout(function(){
     $(this).myCondition();
  });

  $('#dob').keypress(function(){
    $(this).myCondition();
  });
  $('#dob').focusout(function(){
    $(this).myCondition();
  });

  $('#gender').keypress(function(){
    $(this).myCondition();
  });
  $('#gender').focusout(function(){
    $(this).myCondition();
  });

  $('#secQuestion').keypress(function(){
    $(this).myCondition();
  });
  $('#secQuestion').focusout(function(){
    $(this).myCondition();
  });

  $('#secAnswer').keypress(function(){
    $(this).myCondition();
  });
  $('#secAnswer').focusout(function(){
    $(this).myCondition();
  });


  $('#bankName','#bankAccName','#bankAccNumber','#bankAddress','#swiftCode').focusout(function(){
    $(this).myCondition();
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




});//END

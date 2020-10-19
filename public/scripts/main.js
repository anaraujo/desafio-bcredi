const $ = require( 'jquery' );
const JqueryMaskPlugin = require('jquery-mask-plugin');

function checkFilledInput(el) {
    input = $(el);

    if (input.val().length > 0) {
        input.addClass('active');
      } else {
        input.removeClass('active');
      }
}

$(function() {
    $('#cpf_input').mask('000.000.000-00', {reverse: true});
    $('#birth_input').mask('00/00/0000');

    $('.success-msg').addClass('show');

    setTimeout(function(){
        $('.success-msg').removeClass('show');
    }, 3000);

    $('input').each(function() {
        checkFilledInput(this);
    });

    $('input').on('change', function() {
        checkFilledInput(this);
    })

    $('#password_toggle').on('click', function() {
        let passwordWrapper = $('.password-wrapper');
        let passwordInput = $('#password_input');
        
        passwordWrapper.toggleClass('show');

        if (passwordWrapper.hasClass('show')) {
            passwordInput.attr('type', 'text');
        } else {
            passwordInput.attr('type', 'password');
        }
    });
});

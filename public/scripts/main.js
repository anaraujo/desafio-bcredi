const $ = require( 'jquery' );
const JqueryMaskPlugin = require('jquery-mask-plugin');

$(function() {
    $('#cpf_input').mask('000.000.000-00', {reverse: true});
    $('#birth_input').mask('00/00/0000');
});
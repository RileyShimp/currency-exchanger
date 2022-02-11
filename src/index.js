import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Euro from './js/euro.js';

let clearInput = () => {
  $('#search').val("");
};

$(document).ready(function() {
  $("#euro").click(function() {
    let input = $("#input").val();
    clearInput();
    let promise = Euro.getEuro(input);
    promise.then(function(response) {
      const body = JSON.parse(response);
      const conversion = body.conversion_result;
      let htmlString = `<img src="${conversion}">`;
      $(".conversionResult").html(htmlString);
    },function(error) {
      $('.showErrors').text(`There was an error: ${body.error-type}`);
    });
  });
});


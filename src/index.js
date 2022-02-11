import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Exchange from './js/exchange.js';

let clearInput = () => {
  $('#input').val("");
  $('#results').text("");
};

$(document).ready(function() {
  $("#currencyForm").submit(function(event) {
    event.preventDefault();
    let input = $("#input").val();
    let currency = $("#currency").val();
    console.log(currency);
    clearInput();
    let promise = Exchange.getCurrency(input,currency);
    promise.then(function(response) {
      const body = JSON.parse(response);
      console.log(body);
      const conversion = body.conversion_result;
      $("#results").html(conversion);
    },function(response) {
      const body = JSON.parse(response);
      const error = body.error-type;
      $("#errors").html(error);
    });
  });
});
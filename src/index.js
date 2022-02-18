import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Exchange from './js/exchangeFetch.js';

let clearInput = () => {
  $('#input').val("");
  $('#results').text("");
  $('#errors').text("");
  $('#apiErrors').text("");
  $("#resultCard").hide();
  $("#errorCard").hide();
};

function getElements(response) {
  if (response.conversion_result) {
    $('#results').text(`${response.conversion_result}`);
    $("#resultCard").show();
  } else {
    $('#errors').text(`There was an error: ${response.message}`);
    $("#errorCard").show();
  }
}

$(document).ready(function() {
  $("#currencyForm").submit(function(event) {
    event.preventDefault();
    let input = $("#input").val();
    let currency = $("#currency").val();
    clearInput();
    Exchange.getCurrency(input,currency)
      .then(function(response){
        getElements(response);
      });
  });
});
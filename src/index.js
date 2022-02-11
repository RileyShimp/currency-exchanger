import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Euro from './js/euro.js';

// let clearInput = () => {
//   $('#input').val("");
// };

$(document).ready(function() {
  $("#convert").click(function(event) {
    event.preventDefault();
    let input = $("#input").val();
    let promise = Euro.getEuro(input);
    promise.then(function(response) {
      const body = JSON.parse(response);
      console.log(body);
      const conversion = body.conversion_result;
      $("#results").html(conversion);
    },function(error) {
      $('#showErrors').html(error);
      console.log(error);
    });
  });
});
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Euro from './js/euro.js';

// let clearInput = () => {
//   $('#search').val("");
// };

$(document).ready(function() {
  $("#convert").click(function() {
    let input = $("#input").val();
    let promise = Euro.getEuro(input);
    promise.then(function(response) {
      const body = JSON.parse(response);
      console.log(body);
      const conversion = body.conversion_rate;
      $("#results").html(conversion);
    },function(error) {
      $('#showErrors').text("There was an error: INVALID INPUT");
      console.log(error);
    });
  });
});
export default class Exchange {
  static getCurrency(input,currency) {
    return new Promise (function(resolve,reject) { 
      const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${currency}/${input}`;
      let request = new XMLHttpRequest();
      request.onload = function() {
        if (this.status === 200) {
          console.log(this.status);
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
}
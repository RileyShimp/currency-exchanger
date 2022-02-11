export default class Exchange {
  static getCurrency(input,currency) {
    return new Promise (function(resolve,reject) { 
      let request = new XMLHttpRequest();
      const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${currency}/${input}`;
      request.onload = function() {
        console.log(this.status);
        if (this.status === 200) {
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
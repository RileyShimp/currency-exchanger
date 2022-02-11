export default class Yen {
  static getYen(input) {
    return new Promise (function(resolve,reject) { 
      const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/JPY/${input}`;
      let request = new XMLHttpRequest();
      request.onload = function() {
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
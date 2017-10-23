import fetch from 'node-fetch';
import colors from 'colors';

export default class Bittrex {

  constructor() {
    this.baseUrl = 'https://bittrex.com/api/v1.1/';
    this.apiKey = '';
    this.apiSecret = '';
    this.getMarkets = this.getMarkets.bind(this);
  }

  getMarkets() {
    fetch(`${this.baseUrl}public/getmarketsummary?market=btc-ark`)
      .then((res) => {
        return res.json();
      }).then((json) => {
      const marketName = json.result[0].MarketName;
      const currentValue = json.result[0].Ask;
      const timeStamp = json.result[0].TimeStamp;
      console.log(colors.blue(`${marketName}: ${colors.green(currentValue)} - ${colors.underline.cyan(timeStamp)}`));
    });
  }
}

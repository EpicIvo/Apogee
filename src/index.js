import colors from 'colors';
import Bittrex from './bittrex';

function init() {
  const bittrex = new Bittrex();
  bittrex.getMarkets();
  return colors.green('App start:\n\n');
  setInterval(init(), 5000);
}

if (require.main === module) {
  process.stdout.write(init());
}

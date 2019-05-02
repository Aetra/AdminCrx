export function formatHashrate(params/*, hash*/) {
  var hashrate=params;
  var i = 0;
  var units = ['H', 'KH', 'MH', 'GH', 'TH', 'PH'];
  while (hashrate > 1000) {
    hashrate = hashrate / 1000;
    hashrate.toFixed(4);
    i++;
  }
  return hashrate + ' ' + units[i]+'/s';
}

export function variance(params) {

}

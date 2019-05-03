import moment from "moment";

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

export function stringToInt(value) {
	return parseInt(value);
}

export function formatDate(ts) {
	var date = moment.unix(ts);
	return date.format('DD/MM/YYYY - hh:mm');
}

export function formatNumber(numberString) {
    let number = parseFloat(numberString);
    return number.toLocaleString('USD');
}

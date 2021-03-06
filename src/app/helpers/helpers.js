import moment from "moment";
import React from 'react';

export function findMin(arr) {
  let min = arr[0];
  for (let i = 1, len=arr.length; i < len; i++) {
    let v = arr[i];
    min = (v < min) ? v : min;
  }
return min;
}

export function findMax(arr) {
  let max = arr[0];
  for (let i = 1, len=arr.length; i < len; i++) {
    let v = arr[i];
    max = (v > max) ? v : max;
  }
return max
}
export function offline(ts) {
  var date = moment.unix(ts);
	var now = moment();
  moment.duration(now.diff(date));
  var duration = moment.duration(now.diff(date));
  return duration.asSeconds()>900;
}

export function removeComa(params){
  params=params.replace(',', '');
  return params=params.replace(',', '');
}

export function formatHashrate(params, hash) {
  var hashrate=params*1;
  var i = 0;
  var units = ['H', 'KH', 'MH', 'GH', 'TH', 'PH'];
  while (hashrate > 1000) {
    hashrate = hashrate / 1000;
    i++;
  }
  return hashrate.toFixed(3) + ' ' + units[i]+'/s';
}

export function formatHashrateApi(params, hash) {
  var hashrate=params*1;
  var i = 0;
  var units = ['H', 'GH', 'TH', 'PH'];
  while (hashrate > 1000) {
    hashrate = hashrate / 1000;
    i++;
  }
  return hashrate.toFixed(3) + ' ' + units[i]+'/s';
}

export function formatDifficulty(params, hash) {
  var difficulty=params*1;
  while (difficulty > 1000) {
    difficulty = difficulty / 1000;
  }
  return difficulty.toFixed(3);
}

export function variance(params1,params2){
  var difficulty=params1;
  var shares=params2;
  var percent= (difficulty/shares)*100
  return percent;
}

export function luck(blocks) {
    var len = 0;
    var sum = 0;
    if (blocks && blocks.length > 0) {
        for (var i = 0; i<blocks.length; i++) {
            sum += variance(blocks[i].shares, blocks[i].difficulty);
            len++
        }
    }
    if (len > 0) {
        var luck = sum/len;
        return luck.toFixed(1);
    }
    return 0;
}

export function formatDate(ts) {
	var date = new Date(ts * 1000);
	return date.toLocaleString();
}

export function formatNumber(numberString) {
    let number = parseFloat(numberString);
    return number.toLocaleString('USD');
}

export function workersLength(params/*, hash*/) {
  return Object.keys(params).length;
}

export function formatBalance(value) {
	value = value * 0.000000001;
	return value.toFixed(6);
}

export function formatDuration(ts) {
	var date = moment.unix(ts);
	var now = moment();
	var duration = moment.duration(now.diff(date));
	var label ='';
	if (duration.years()> 0) {
		label += duration.years()+ 'y, ';
	}
	if (duration.months()> 0) {
		label += duration.months()+ 'm, ';
	}
	if (duration.days()> 0) {
		label += duration.days()+ 'd, ';
	}
	if(duration.hours()>0) {
		label += duration.hours()+':';
	}
	if(duration.minutes()>0) {
		if(duration.minutes()<10){
			label += '0';
		}
		label += duration.minutes()+':';
	} else{
		label += '00:'
	}
	if(duration.seconds()<10){
		label += '0';
	}
	label += duration.seconds();
	return label;
}

export function renderSafeHTML(rawHTML, element = 'div') {
  return React.createElement(element, {
    dangerouslySetInnerHTML: {
      __html: rawHTML
    }
  });
}

export function progressThreshold(params1, params2) {
  var balance = params1*0.000000001;
  var threshold = params2;
  var defaultThreshold = 0.1;
  var progress = 0;

  if(threshold === undefined){
    threshold = defaultThreshold;
  }

  if(threshold!==0) {
      progress = balance/threshold*100;
  }
  return progress.toFixed(1);
}

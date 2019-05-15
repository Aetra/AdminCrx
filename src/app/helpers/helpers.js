import moment from "moment";
import React from 'react';

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
	} else {
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

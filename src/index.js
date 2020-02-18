const pretty = require("pretty-ms");
const s = 1000;
const m = 60 * s;
const h = 60 * m;
const d = 24 * h;
const w = 7 * d;
const y = 365.25 * d;

const validUnits = {
	s,
	sec: s,
	secs: s,
	second: s,
	seconds: s,

	m,
	min: m,
	mins: m,
	minute: m,
	minutes: m,

	h,
	hour: h,
	hours: h,

	d,
	day: d,
	days: d,

	w,
	week: w,
	weeks: w,

	y,
	year: y,
	years: y
};

const reMatches = /\d*\.\d+\D+|\d+\.\d*\D+|\d+\D+/g;
const reGroups = /(\d*\.?\d*)(\D+)/;

/**
 * Convert a string to milliseconds
 * @param {String} input
 * @return {Number}
 */
function ms(input) {
	if (typeof input !== "string") throw new TypeError("Argument must be type `string`");

	const matches = input.match(reMatches);

	if (matches) {
		return matches.reduce((total, match) => {
			let [_, amount, unit] = reGroups.exec(match);
			amount = parseFloat(amount);
			unit = unit.trim().toLowerCase();
			return amount && validUnits[unit] ? total + amount * validUnits[unit] : 0;
		}, 0);
	}

	return null;
}

function human(input, options = {}) {
	return typeof input === "number" ? pretty(input, options) : null;
}

function convert(input, options) {
	return ms(input) || human(input, options);
}

module.exports = convert;
module.exports.ms = ms;
module.exports.human = human;

var React = require('react');
var Clock = require('Clock');

var Countdown = () => {
	return (
		<div>
			<h1>Countdown component</h1>
			<Clock totalSeconds={129} />
		</div>
	);
};

module.exports = Countdown;
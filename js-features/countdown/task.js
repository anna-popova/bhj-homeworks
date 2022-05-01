let startTimerValue = document.getElementById('timer');

let timerId = setInterval(function() {
	--startTimerValue.textContent;

	if(startTimerValue.textContent == 0) {
		clearInterval(timerId);
		alert('Вы победили в конкурсе!');
	}
}, 1000);


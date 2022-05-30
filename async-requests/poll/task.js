const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');
console.log(pollAnswers);

const xhr = new XMLHttpRequest();
xhr.responseType = 'json';
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();

xhr.addEventListener('readystatechange', () => {
	let responseObj = xhr.response;

	pollTitle.textContent = responseObj.data.title;

	if(xhr.readyState === xhr.DONE) {
		// console.log(responseObj.data.answers);
		for (let answer of responseObj.data.answers) {
			pollAnswers.insertAdjacentHTML('beforeend', `<button class="poll__answer">${answer}</button>`);
		}
	}
});
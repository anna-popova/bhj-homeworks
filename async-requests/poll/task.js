const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');
console.log(pollAnswers);

const xhr = new XMLHttpRequest();
xhr.responseType = 'json';
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();

xhr.addEventListener('readystatechange', () => {
	let responseObj = xhr.response;
	if(xhr.readyState === xhr.DONE) {
		console.log(responseObj.data.answers);

		for (let answer of responseObj.data.answers) {
			console.log(answer);
		}

		pollTitle.textContent = responseObj.data.title;

		//?как добавить кнопки, если их количество не всегда одинаковое? а зависит от того, сколько ответов будет у вопроса?
		//pollAnswers.insertAdjacentHTML('beforeend', `<button class="poll__answer">Хорошо</button><button class="poll__answer">Отлично</button><button class="poll__answer">Я люблю собак</button><button class="poll__answer">Кто тут?</button>`)
	}
})
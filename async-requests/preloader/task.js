const loader = document.getElementById('loader');
const cardItem = document.querySelector('.item');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.responseType = 'json';
xhr.send();

xhr.addEventListener('readystatechange', () => {
	if (xhr.readyState === xhr.DONE) {
		loader.classList.remove('loader_active');

		const responseObj = xhr.response;
		const responseObjValute = responseObj.response.Valute

		for (let valute in responseObjValute) {
			cardItem.insertAdjacentHTML('beforeend', `<div class="item__code">${responseObjValute[valute].CharCode}</div><div class="item__value">${responseObjValute[valute].Value}</div><div class="item__currency">руб.</div>`);
		}
	}
});


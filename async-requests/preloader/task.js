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
		console.log(responseObjValute);
		// console.log(Object.keys(responseObjValute));
		// console.log(Object.values(responseObjValute));

		// for(let valute in responseObjValute) {
		// 	console.log(valute);
		// }

		//Все данные о курсе валют необходимо подгрузить в элемент #items
		//В данном примере в .item__code нужно подгрузить значение свойства CharCode, в .item__value - Value

		//?не понимаю, как мне добраться до значений свойст в CharCode и в Value

		//cardItem.insertAdjacentHTML('beforeend', `<div class="item__code">${CharCode}</div><div class="item__value">${Value}</div><div class="item__currency">руб.</div>`);
	}
});


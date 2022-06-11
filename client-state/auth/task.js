const form = document.getElementById('signin__form');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const xhr = new XMLHttpRequest();
	xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
	const formData = new FormData(form);
	xhr.send(formData);

	//вы получите JSON-ответ
	//сохраните полученный id-пользователя в локальное хранилище
	//? а как получить жтот самый JSON-ответ
	console.log(xhr.response);
});
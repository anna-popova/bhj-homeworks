const form = document.getElementById('signin__form');
const userID = document.getElementById('user_id');
const welcomeModal = document.getElementById('welcome');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const xhr = new XMLHttpRequest();
	xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');

	xhr.responseType = 'json';

	const formData = new FormData(form);
	xhr.send(formData);

	xhr.onload = function() {
		let responseObj = xhr.response;
		console.log(responseObj.user_id);

		if(responseObj.user_id) {
			userID.textContent = responseObj.user_id;
			welcomeModal.classList.add('welcome_active');
		} else {
			alert('Неверный логин/пароль');
		}
	}

	form.reset();
});


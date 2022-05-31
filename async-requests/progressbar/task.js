const progress = document.getElementById('progress');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const xhr = new XMLHttpRequest();

	xhr.upload.onloadstart = function(event) {
		console.log(event);
		progress.value = 0.3;
	}
	xhr.upload.onprogress = function() {
		console.log('2');
		progress.value = 0.7;
	}
	xhr.upload.onload = function(event) {
		console.log(event);
		progress.value = 1;
	}

	xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
	const formData = new FormData(form);
	xhr.send(formData);
});
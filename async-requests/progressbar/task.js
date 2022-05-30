const progress = document.getElementById('progress');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const xhr = new XMLHttpRequest();
	xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
	const formData = new FormData(form);
	xhr.send(formData);

	xhr.upload.onloadstart = function() {
		progress.value = 0.3;
	}
	xhr.upload.onprogress = function() {
		progress.value = 0.7;
	}
	xhr.upload.onload = function() {
		progress.value = 1;

	// if (xhr.readyState == 1) {
	// 	progress.value = 0.25;
	// } else if (xhr.readyState == 2) {
	// 	progress.value = 0.5;
	// } else if (xhr.readyState == 3) {
	// 	progress.value = 0.75;
	// } else if (xhr.readyState == 4) {
	// 	progress.value = 1;
	// } else {
	// 	progress.value = 0;
	// }
});

// const xhr = new XMLHttpRequest();
// xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');

// const formData = new FormData(form);

// xhr.send(formData);
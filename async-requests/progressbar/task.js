const progress = document.getElementById('progress');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const xhr = new XMLHttpRequest();

	xhr.upload.onloadstart = function(event) {
		progress.value = 0.3;
	}
	xhr.upload.onprogress = function(event) {
		console.log(event);
		//там есть два ключа, на основе которых вы сможете динамически заполнять шкалу прогресс бара.
		//?честно говоря, вообще не понимаю, о каких именно ключах идет речь???
		progress.value = 0.7;
	}
	xhr.upload.onload = function(event) {
		progress.value = 1;
	}

	xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
	const formData = new FormData(form);
	xhr.send(formData);
});
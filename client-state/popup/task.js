const modalPopUp = document.getElementById('subscribe-modal');
const closeButton = document.querySelector('.modal__close_times');

	window.onload = function() {
		modalPopUp.classList.add('modal_active');
	}

closeButton.addEventListener('click', (e) => {
	modalPopUp.classList.remove('modal_active');
	document.cookie = "closePopUp=true";
	console.log(document.cookie);
});

// if (value) {
// 	window.onload = function() {
// 		modalPopUp.classList.add('modal_active');
// 	}
// }

// function getCookie(name) {
// 	const pairs = document.cookie.split('; ');
// 	const cookie = pairs.find(p => p.startsWith(name + '='));
// 	return cookie.substr(name.length + 1);
// }
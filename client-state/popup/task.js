const modalPopUp = document.getElementById('subscribe-modal');
const closeButton = document.querySelector('.modal__close_times');

closeButton.addEventListener('click', (e) => {
	modalPopUp.classList.remove('modal_active');
	document.cookie = "closePopUp=true";
	getCookie('closePopUp');
});

if (value) {
	window.onload = function() {
		modalPopUp.classList.add('modal_active');
	}
}

function getCookie(name) {
	const pairs = document.cookie.split('; ');
	const cookie = pairs.find(p => p.startsWith(name + '='));
	value =  cookie.substr(name.length + 1);
	return value;
}
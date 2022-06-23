const modalPopUp = document.getElementById('subscribe-modal');
const closeButton = document.querySelector('.modal__close_times');
let value;
// console.log(value);
// console.log(typeof value);

if (value !== 'true') {
	window.onload = function() {
		modalPopUp.classList.add('modal_active');
	}
}

// window.onload = function() {
// 	modalPopUp.classList.add('modal_active');
// }

closeButton.addEventListener('click', (e) => {
	modalPopUp.classList.remove('modal_active');
	document.cookie = "closePopUp=true";
	getCookie('closePopUp');
});

function getCookie(name) {
	const pairs = document.cookie.split('; ');
	const cookie = pairs.find(p => p.startsWith(name + '='));
	value =  cookie.substring(name.length + 1);
	console.log(value);
	console.log(typeof value);
}

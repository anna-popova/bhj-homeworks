const closeButton = document.querySelector('.modal__close');
const showSuccessButton = document.querySelector('.show-success');

const modalMainPopUp = document.getElementById('modal_main');
const modalSuccessPopUp = document.getElementById('modal_success');

closeButton.onclick = function() {
	modalMainPopUp.classList.remove('modal_active');
}

showSuccessButton.onclick = function() {
	modalMainPopUp.classList.remove('modal_active');
	modalSuccessPopUp.classList.add('modal_active');
}
const closeButtons = document.querySelectorAll('.modal__close_times');
const showSuccessButton = document.querySelector('.show-success');

const modalMainPopUp = document.getElementById('modal_main');
const modalSuccessPopUp = document.getElementById('modal_success');

const lastElCloseButtons = closeButtons.length - 1;

// closeButton.onclick = function() {
// 	modalMainPopUp.classList.remove('modal_active');
// }

showSuccessButton.onclick = function() {
	modalMainPopUp.classList.remove('modal_active');
	modalSuccessPopUp.classList.add('modal_active');
}

for (let i = 0; i < lastElCloseButtons; i++) {
	closeButtons[i].onclick = function() {
		//а внутри обработчика события с помощью контекста вызова (this) в котором находится объект 
		//на котором произошло событие с помощью closest находить то модальное окно к которому принадлежит 
		//крестик и его закрывать.
		let modalWindow = this.closest('.modal');
		console.log(modalWindow);
		modalWindow.classList.remove('modal_active');
	}
}
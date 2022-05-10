const dropdownValue = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownItems = Array.from(document.querySelectorAll('.dropdown__item'));

//сворачивание/разворачивание списка по нажатию на кнопку
function toggleClassList() {
	dropdownList.classList.toggle("dropdown__list_active");
}
dropdownValue.addEventListener('click', toggleClassList);

//замена значения по выбору соответствующего пункта меню
function changeValue(event) {
	//!не понимаю, почему на долю секунды я вижу в консоле hi, а потом все исчезает?
	console.log('hi')
	let target = event.target;

	dropdownList.classList.remove("dropdown__list_active");
	//!также почему на долю секунды происходит смена наименования, а потом меняется обратно?
	dropdownValue.textContent = target.textContent;

	return false;
}

dropdownItems.forEach(elem => {
	elem.addEventListener('click', changeValue);
})

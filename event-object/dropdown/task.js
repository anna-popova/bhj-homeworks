const openButton = document.querySelector('.dropdown__value');
// console.log(openButton);
const dropdownList = document.querySelector('.dropdown__list');
// console.log(dropdownList);

openButton.onсlick = function() {
	console.log('HI');
	dropdownList.classList.toggle("dropdown__list_active");
}
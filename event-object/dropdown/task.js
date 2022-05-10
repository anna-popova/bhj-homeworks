const dropdownValue = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownItems = Array.from(document.querySelectorAll('.dropdown__item'));

function toggleClassList() {
	dropdownList.classList.toggle("dropdown__list_active");
}

function closeClassList() {
	dropdownList.classList.remove("dropdown__list_active");
}

dropdownValue.addEventListener('click', toggleClassList);

for(let i = 0; i < dropdownItems.length; i++) {
	dropdownItem = dropdownItems[i];
	const dropdownLink = dropdownItem.querySelector('.dropdown__link');

	//насколько я понимаю, function changeValueName() не должна располагаться в цикле.
	//но если вынести ее за пределы, как она получит доступ к dropdownLink за пределами цикла???
	function changeValueName() {
		dropdownList.classList.remove("dropdown__list_active");
		dropdownValue.textContent = dropdownLink.textContent;
		return false;
	}

	//на доли секунды текстовое содержание кнопки .dropdown__value меняется, но потом меняется обратно
	//не совсем понимаю, почему так
	dropdownItem.addEventListener('click', changeValueName);
}
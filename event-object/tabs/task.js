const tabs = Array.from(document.querySelectorAll('.tab'));
const tabsContent = Array.from(document.querySelectorAll('.tab__content'));

function selectTab(event) {
	console.log(event.target);
	let target = event.target;

	//при клике на tab, удаляем классы active со всех элементов
	document.querySelectorAll('.tab').forEach(elem => {
		elem.classList.remove('tab_active');
	});
	document.querySelectorAll('.tab__content').forEach(elem => {
		elem.classList.remove('tab__content_active');
	});

	//при клике на tab, добавляет класс active соответствующему элементу tab
	target.classList.add('tab_active');

	//находим индекс активного tab
	let index = tabs.indexOf(document.querySelector('.tab_active'));
	console.log(index);

	//Найденный индекс используем для показа нужного содержимого .tab__content
	tabsContent[index].classList.add('tab__content_active');
}

tabs.forEach(elem => {
	elem.addEventListener('click', selectTab);
})
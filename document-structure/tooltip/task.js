const hasTooltipLinks = Array.from(document.querySelectorAll('.has-tooltip'));

hasTooltipLinks.forEach(item => {
	item.addEventListener('click', (event) => {
		event.preventDefault();

		// let { left } = item.getBoundingClientRect();
		// console.log(left);

		let tooltip = document.createElement('div');
		tooltip.textContent = item.title;
		tooltip.classList.add('tooltip');
		tooltip.classList.toggle('tooltip_active');

		// console.log(tooltip.getBoundingClientRect().left);
		// tooltip.getBoundingClientRect().left = left;

		item.insertAdjacentElement('afterend', tooltip);
	})
})

//!вопрос 1
//как сделать так, чтобы при клике на ссылку подсказка появлялась и исчезала. сейчас она у меня только появляется
//мое решение - код на стр. 13. но toggle не срабатывает.

//!вопрос 2
//не понимаю, как размещать подсказку в зависимости от положения текста
//пыталась присвоить значение left (стр. 16), но этот код не работает
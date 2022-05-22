const hasTooltipLinks = Array.from(document.querySelectorAll('.has-tooltip'));

hasTooltipLinks.forEach(item => {
	item.addEventListener('click', (event) => {
		event.preventDefault();

		let { top, left } = item.getBoundingClientRect();
		// console.log(top);
		// console.log(left);

		let tooltip = document.createElement('div');
		tooltip.textContent = item.title;
		tooltip.classList.add('tooltip');
		tooltip.classList.toggle('tooltip_active');

		tooltip.style.left = left + 'px';
		tooltip.style.top = (top + 18) + 'px';

		//каждый раз при нажатии на ссылку, у меня добавляется подсказка
		//т.е. в итоге у меня может быть много подсказок
		//? как мне реализовать удаление подсказки после повторного нажатия на ссылку
		item.insertAdjacentElement('afterend', tooltip);
	})
})
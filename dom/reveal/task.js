const reveals = Array.from((document.querySelectorAll('.reveal')));

window.addEventListener('scroll', function() {
	for (const reveal of reveals) {
		const {top, bottom} = reveal.getBoundingClientRect();

		//чтобы эдемент появлялся, когда страница прокрутится до элемента:
		if (top < this.window.innerHeight) {
			reveal.classList.add('reveal_active');
		}

		//чтобы элемент исчезал, когда страница прокрутится ниже или выше элемента:
		if (bottom < 0 || top > this.window.innerHeight) {
			reveal.classList.remove('reveal_active');
		}
	}
});
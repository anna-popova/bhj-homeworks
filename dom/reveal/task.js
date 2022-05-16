const reveals = Array.from((document.querySelectorAll('.reveal')));
// console.log(reveals);

window.addEventListener('scroll', function() {
	for (const reveal of reveals) {
		// console.log(reveal.getBoundingClientRect());

		const {top, bottom} = reveal.getBoundingClientRect();

		if (bottom > 0 || top < this.window.innerHeight) {
			reveal.classList.add('reveal_active');
		}
	}
});
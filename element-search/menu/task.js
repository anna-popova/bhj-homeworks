const menuLinks = document.querySelectorAll('.menu__link');

for (let i = 0; i <= menuLinks.length; i++) {
	let menuLink = menuLinks[i];

	menuLink.onclick = function() {
		let menuSub = menuLink.closest('.menu_sub');

		if(menuSub) {
			menuSub.classList.add('menu_active');
			return false;
		}
	}

}
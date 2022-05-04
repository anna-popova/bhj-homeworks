const menuLinks = document.querySelectorAll('.menu__link');

for (let i = 0; i <= menuLinks.length; i++) {
	let menuLink = menuLinks[i];

	let menuItem = menuLink.closest('.menu__item');
	// console.log(menuItem);
	let subMenu = menuItem.closest('.menu_sub');
	console.log(subMenu);

	menuLink.onclick = function() {
		if(subMenu) {
			// console.log('Hi');
			subMenu.classList.toggle('menu_active');
			return false;
		}
	}
}
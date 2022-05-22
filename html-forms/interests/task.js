const interestCheckBoxes = Array.from(document.querySelectorAll('.interest__check'));
// console.log(interestCheckBoxes);

let highestIterestCheckBoxes = [];

interestCheckBoxes.forEach(item => {
	if (!item.closest('.interests_active')) {
		highestIterestCheckBoxes.push(item);
	}
});
// console.log(highestIterestCheckBoxes);

highestIterestCheckBoxes.forEach(item => {
	item.addEventListener('change', () => {

		const containerForCheckBoxesGroup = item.closest('.interest');
		// console.log(containerForCheckBoxesGroup);
		const containerInterests = containerForCheckBoxesGroup.querySelector('ul');
		// console.log(containerInterests);
		const innerCheckBoxes = Array.from(containerInterests.querySelectorAll('input'));
		// console.log(innerCheckBoxes);

		innerCheckBoxes.forEach(elem => {
			if (!elem.checked) {
				elem.checked = true;
			} else {
				elem.checked = false;
			}
		})
	})
})
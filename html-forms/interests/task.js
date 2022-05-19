const interestCheckBoxes = Array.from(document.querySelectorAll('.interest__check'));
// console.log(interestCheckBoxes);

let highestIterestCheckBoxes = [];

interestCheckBoxes.forEach(item => {
	// console.log(item.closest('.interests_active'));

	if (!item.closest('.interests_active')) {
		highestIterestCheckBoxes.push(item);
	}
});

console.log(highestIterestCheckBoxes);

highestIterestCheckBoxes.forEach(item => {
	item.addEventListener('change', () => {
		console.log('Что делать дальше?');

		//?не совсем понимаю, что делать дальше. Прошу подсказку.
	})
})
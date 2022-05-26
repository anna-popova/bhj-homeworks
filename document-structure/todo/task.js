const taskInput = document.getElementById('task__input');
const tasksAddButton = document.getElementById('tasks__add');
const tasksList = document.getElementById('tasks__list');


tasksAddButton.addEventListener('click', (e) => {
	e.preventDefault();

	taskInput.value = taskInput.value.trim();

	if (taskInput.value !== '') {
		tasksList.insertAdjacentHTML('afterend', `<div class="task"><div class="task__title">${taskInput.value}</div><a href="#" class="task__remove">&times;</a></div>`);
	}

	taskInput.value = '';

	const taskRemoveButtons = Array.from(document.querySelectorAll('.task__remove'));

	//Поэтому вам приходится перебирать все элементы крестиков и на каждый добавлять обработчик события.
	//Если воспользуетесь методом insertAdjacentHTML, то разметка не будет полностью обновляться. 
	//Будет добавляться новая разметка, а следовательно обработчики событий сохранятся и вам необходимо 
	//будет добавлять слушатель события только на добавленный элемент.
	//!ну мне в любом случае надо перебирать все крестики, иначе как я навешу событие на каждый из них
	//!если их много, то в любои случае приходится их собирать в массив и проходиться по массиву
	taskRemoveButtons.forEach(item => {
		item.addEventListener('click', (e) => {
			e.preventDefault();
	
			let itemParent = item.parentElement;
			itemParent.remove();
		})
	})
});
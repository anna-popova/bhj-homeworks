const taskInput = document.getElementById('task__input');
const tasksAddButton = document.getElementById('tasks__add');
const tasksList = document.getElementById('tasks__list');


tasksAddButton.addEventListener('click', (e) => {
	e.preventDefault();

	if (taskInput.value !== '') {
		tasksList.innerHTML += `
			<div class="task">
				<div class="task__title">${taskInput.value}</div>
				<a href="#" class="task__remove">&times;</a>
			</div>
		`
	}

	taskInput.value = '';

	const taskRemoveButtons = Array.from(document.querySelectorAll('.task__remove'));

	taskRemoveButtons.forEach(item => {
		item.addEventListener('click', (e) => {
			e.preventDefault();
	
			let itemParent = item.parentElement;
			itemParent.remove();
		})
	})
})
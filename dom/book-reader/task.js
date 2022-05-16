const bookControls = Array.from(document.querySelectorAll('.font-size'));
const book = document.querySelector('.book');
console.log(book);


bookControls.forEach(elem => {
	elem.addEventListener('click', (event) => {
		event.preventDefault();

		elem.classList.toggle('font-size_active');

		if (elem.classList.contains('font-size_small')) {
			book.classList.add('book_fs-small');
		} else if (elem.classList.contains('font-size_big')) {
			book.classList.add('book_fs-big');
		} else {
			book.classList.remove('book_fs-small');
			book.classList.remove('book_fs-big');
		}
	});
})
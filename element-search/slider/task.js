const sliderArrowPrev = document.querySelector('.slider__arrow_prev');
const sliderArrowNext = document.querySelector('.slider__arrow_next');
const sliders = Array.from(document.querySelectorAll('.slider__item'));

let activeSlide = sliders.findIndex((item) => item.classList.contains('slider__item_active'));
// console.log(activeSlide);

function slide(newActiveSlide) {
	sliders[activeSlide].classList.remove('slider__item_active');
	sliders[newActiveSlide].classList.add('slider__item_active');
	activeSlide = newActiveSlide;
}

sliderArrowPrev.addEventListener('click', () => {
	let newSlide = activeSlide - 1;
	newSlide = newSlide < 0 ? sliders.length - 1 : newSlide;
	slide(newSlide);
});

sliderArrowNext.addEventListener('click', () => {
	let newSlide = activeSlide + 1;
	newSlide = newSlide >= sliders.length ? 0 : newSlide;
	slide(newSlide);
});
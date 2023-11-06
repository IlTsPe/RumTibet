
const header = document.querySelector('.header');

const headerFix = () => {
	document.addEventListener('scroll', () => {
		document.documentElement.scrollTop > 1 ?
			header.classList.add('header-fixed') :
			header.classList.remove('header-fixed');
	});
}

window.addEventListener('DOMContentLoaded', () => {
	if (window.innerWidth >= 1025) headerFix()
});

window.addEventListener('resize', () => {
	if (window.innerWidth >= 1025) headerFix()
});


/* Вариант с debounce */
// const scrollHeader = () => {
// 	document.documentElement.scrollTop > 1 ? header.classList.add('header-fixed') : header.classList.remove('header-fixed');
// };

// function debounce(callback, delay) {
// 	let timer;
// 	return function (...args) {
// 		clearTimeout(timer);
// 		timer = setTimeout(() => {
// 			callback.apply(this, args)
// 		}, delay);
// 	}
// };

// document.addEventListener('scroll', debounce(scrollHeader, 500));

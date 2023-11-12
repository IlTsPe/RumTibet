import { debounce } from "./debounce";

const header = document.querySelector('.header');

const headerFix = () => {
	document.addEventListener('scroll', () => {
		document.documentElement.scrollTop > 1 ?
			header.classList.add('header-fixed') :
			header.classList.remove('header-fixed');
	});
}

document.addEventListener('scroll', debounce(headerFix, 100));

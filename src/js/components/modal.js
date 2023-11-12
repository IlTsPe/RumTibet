import { debounce } from "./debounce";

const modal = document.querySelector('.modal');
const consultationBtn = document.querySelector('.consultation-btn');
const closeButton = document.querySelector('.modal__close');
const iconContainer = document.querySelector('.show-hide-password');
const input = document.querySelector('#password');
const icon = document.querySelector('svg[data-status="hide"]');
const view = document.querySelector('.hide-password');
const body = document.querySelector('body');


/* --------Функции для вызова------- */
const conditions = function (type, hideClass) {
	input.type = type;
	icon.classList.toggle(hideClass);
	view.classList.toggle(hideClass);
};

const closeModal = function () {
	modal.classList.add('modal--hidden');
	body.classList.remove('body--modal');
};

const openModal = function () {
	modal.classList.remove('modal--hidden');
	body.classList.add('body--modal');
};

const appearancePasswordIcon = function () {
	this.value < 1 ?
		iconContainer.style.opacity = 0 :
		iconContainer.style.opacity = 1;
}


/* --------Обработчики событий-------- */
iconContainer.addEventListener('click', (e) => {
	e.preventDefault();
	input.type === 'password' ?
		conditions('text', 'hide-password') :
		conditions('password', 'hide-password');
});

input.addEventListener('input', debounce(appearancePasswordIcon, 150));

consultationBtn.addEventListener('click', (e) => {
	e.preventDefault();
	openModal();
});

modal.addEventListener('click', (e) => {
	const target = e.target;
	if (!target.hasAttribute('data-overlay')) return
	closeModal();
});

closeButton.addEventListener('click', (e) => {
	e.preventDefault();
	closeModal();
});

document.addEventListener('keydown', (e) => {
	if (e.code === 'Escape') closeModal();
});

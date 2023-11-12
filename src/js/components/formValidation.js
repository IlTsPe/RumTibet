const location = document.querySelector('#location');
const date = document.querySelector('#airDate');
const persons = document.querySelector('#participant');
const btn = document.querySelector('#hero-btn');
const form = document.querySelector('.choose-programm');
const reset = document.querySelector('.reset-btn');



form.addEventListener('submit', (e) => {
	e.preventDefault();
	if (!location.value || !date.value || !persons.value) {
		alert('Не все поля заполнены')
		reset.classList.remove('reset-btn--hidden')
	} else {
		window.location.href = "https://pegastk.com/?etext=2202.Ownu0OmdbGuRTQtVPb8F9r7-DYwVe7x_qw_vNAYcg5h1c3hhc29mYXhwenl3bGpz.d766a1ca3dba274ccb09ba75fd1c8d07a652a74b&yclid=5887379468034841082";
	}
});

const toggle= document.querySelector('.toggle-btn');
const navLinks = document.querySelector('.nav-links');


toggle.addEventListener('click' ,()=> {
	navLinks.classList.toggle('active')
})
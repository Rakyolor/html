var links= document.querySelectorAll(".header-menu a");

links.forEach(li=> {
li.addEventListener("click",()=> {
	resetLinks();
	li.classList.add("active");
    })
})

function resetLinks() {
	links.forEach(li=> {
	 li.classList.remove("active")
		})
}

const burger = document.querySelector('.burger')
const mob = document.querySelector('.header-mob')

burger.addEventListener('click', () => {
	burger.classList.toggle('active');
    mob.classList.toggle('active');
});

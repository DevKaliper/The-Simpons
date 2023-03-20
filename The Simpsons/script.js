// Favorites button in Third Section
const favButton = document.querySelectorAll("#heartbutton");

favButton.forEach((item) => {
	item.onclick = () => {
		item.classList.toggle("active");
	};
});
// ---------------------------------------------------------------------------------------------

// Sidebar
const menuToggle = document.querySelector(".menuToggle");
const nav = document.querySelector(".navegation");

menuToggle.onclick = () => {
	nav.classList.toggle("open");
};

const list = document.querySelectorAll(".list");

function activarLink() {
	list.forEach((item) => item.classList.remove("active"));
	this.classList.add("active");
}

list.forEach((item) => item.addEventListener("click", activarLink));
// ---------------------------------------------------------------------------------------------
// ------------------ACTIVAR EL RECUADRO DE PREGUNTAS-----------
const question = document.querySelectorAll(".SS-Question");

function runSelecAll(x) {
	x.forEach((item) => {
		item.onclick = () =>{
			item.classList.toggle("active")
		}
	});
}

runSelecAll(question)
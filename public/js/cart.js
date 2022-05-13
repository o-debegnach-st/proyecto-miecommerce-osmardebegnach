window.addEventListener("load", () => {
	let irAPagar = document.querySelector("#irAPagar");

	const container = document.querySelector(".modal-container");
	
	const openModal = () => {
		container.classList.remove("hidden");
	};
  
	irAPagar.addEventListener("click", (e) => {
		e.preventDefault();
		openModal();
	});
});

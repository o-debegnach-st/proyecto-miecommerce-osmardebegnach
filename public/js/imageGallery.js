window.addEventListener("DOMContentLoaded", function () {
	const gallery = document.querySelector("#gallery");
	const galleryBtns = document.querySelectorAll(".gallery-btn");
	const imgProducto = document.querySelector(".imagenProducto");
  
	galleryBtns.forEach((btn) => {
		console.log(btn.dataset.image);
		btn.style.backgroundImage = `url(${btn.dataset.image})`;
		btn.addEventListener("click", (e) => {
			galleryBtns.forEach(btn => {
        btn.classList.remove('activo')
      });
      e.target.classList.add('activo')

      imgProducto.setAttribute("src", btn.dataset.image);
		});
	});
});

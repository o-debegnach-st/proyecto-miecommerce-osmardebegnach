window.addEventListener("load", function () {
	const passwordElement = document.querySelector("#password");
	const passwordElement2 = document.querySelector("#password2");
	const msg = document.querySelector("#message");
	const str = document.querySelector("#strenght");
	var errorDiv = document.querySelector("#divError");
	let formulario = document.querySelector("form.inputsregister");
	const button = document.querySelector(".boton");
	let email = document.querySelector("#email");

	function isEmpty() {
		let flag = false;
		if (email.value === "") {
			flag = true;
		}
		if (passwordElement.value === "") {
			flag = true;
		}
		if (passwordElement2.value === "") {
			flag = true;
		}

		if (flag === true) {
			button.disabled = true;
			button.style.backgroundColor = "grey";
		} else {
			button.disabled = false;
			button.style.backgroundColor = "rgba(12, 176, 147, 1)";
		}
	}
	formulario.addEventListener("keyup", isEmpty);

	formulario.addEventListener("submit", function (e) {
		let errores = [];

		let expresion1 =
			/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;

		if (email.value === "") {
			errores.push("El campo email no puede estar vacio");
		}
		if (passwordElement.value === "") {
			errores.push("El campo contraseña no puede estar vacio");
		}
		if (passwordElement2.value === "") {
			errores.push("El campo contraseña no puede estar vacio");
		}

		if (!email.value.match(expresion1)) {
			errores.push("El email debe tener un formato valido.");
		}
		if (
			email.value[0] === " " ||
			email.value[email.value.length - 1] === " " ||
			passwordElement.value[0] === " " ||
			passwordElement.value[passwordElement.value.length - 1] === " "
		) {
			errores.push(
				"Los campos no deben tener espacios en blanco al inicio o fin."
			);
		}
		if (passwordElement.value !== passwordElement2.value) {
			errores.push("Las contraseñas deben coincidir.");
		}
		if (passwordElement.value.length < 8) {
			errores.push("La contraseña debe tener al menos 8 caracteres");
		}

		if (errores.length > 0) {
			e.preventDefault();
			errorDiv.style.display = "block";
			errorDiv.innerHTML = "";
			for (let i = 0; i < errores.length; i++) {
				errorDiv.innerHTML += `<li >  ${errores[i]} </li>`;
			}
		}
	});

	passwordElement.addEventListener("input", () => {
		if (passwordElement.value.length > 0 && passwordElement.value.length <= 3) {
			passwordElement.classList.remove("input-form");
			passwordElement.classList.add("input-form2");
			msg.style.display = "block";
			str.innerHTML = "muy corta";
			str.style.color = "red";
		} else if (
			passwordElement.value.length >= 4 &&
			passwordElement.value.length <= 6
		) {
			passwordElement.classList.remove("input-form");
			passwordElement.classList.add("input-form2");
			msg.style.display = "block";
			str.innerHTML = "debil";
			str.style.color = "blue";
		} else if (
			passwordElement.value.length >= 7 &&
			passwordElement.value.length <= 10
		) {
			passwordElement.classList.remove("input-form");
			passwordElement.classList.add("input-form2");
			msg.style.display = "block";
			str.innerHTML = "normal";
			str.style.color = "grey";
		} else if (
			passwordElement.value.length >= 10 &&
			passwordElement.value.length <= 13
		) {
			passwordElement.classList.remove("input-form");
			passwordElement.classList.add("input-form2");
			msg.style.display = "block";
			str.innerHTML = "buena";
			str.style.color = "green";
		} else if (passwordElement.value.length > 13) {
			passwordElement.classList.remove("input-form");
			passwordElement.classList.add("input-form2");
			msg.style.display = "block";
			str.innerHTML = "muy buena";
			str.style.color = "green";
		} else {
			passwordElement.classList.remove("input-form2");
			passwordElement.classList.add("input-form");
			msg.style.display = "none";
		}
	});
});
